import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { settings } from "../assets/settings";
import { DBError } from "../controllers/DBError";
import { authRepository } from "../repositories/authRepository";
import type { Login, Register } from "../types/services/authService";
import { HTTP_STATUSES } from "../utils";

export const authService = {
	async register(data: Register) {
		const { email, firstName, secondName, password } = data;
		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(password, salt);

		const registerdUser = await authRepository.register({
			email,
			firstName,
			secondName,
			passwordHash,
		});

		const token: string = jwt.sign(
			{ userId: registerdUser.userId },
			settings.JWT_SECRET,
			{
				expiresIn: "30d",
			},
		);

		const userWithoutPasswordHash = {
			email: registerdUser.email,
			firstName: registerdUser.firstName,
			secondName: registerdUser.secondName,
			token,
		};

		return userWithoutPasswordHash;
	},

	async login(data: Login) {
		const { email, password } = data;

		const loginnedUser = await authRepository.login({ email });

		const isValidPass = await bcrypt.compare(
			password,
			loginnedUser.passwordHash,
		);

		if (!isValidPass) {
			throw new DBError(
				"Логин или пароль не верен",
				HTTP_STATUSES.BAD_REQUEST_400,
			);
		}

		const { userId, firstName, secondName } = loginnedUser;

		const token = jwt.sign({ userId }, settings.JWT_SECRET, {
			expiresIn: "30d",
		});

		return { firstName, secondName, token };
	},
};
