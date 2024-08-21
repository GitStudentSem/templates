import type { Response } from "express";
import { sendError } from "../assets/requestAssets";
import { authService } from "../services/authService";
import type { ErrorType, RequestWithBody } from "../types";
import type {
	BodyLogin,
	BodyRegister,
	ViewLogin,
	ViewRegister,
} from "../types/controllers/authController";
import { HTTP_STATUSES } from "../utils";
import { DBError } from "./DBError";

export const authController = {
	async register(
		req: RequestWithBody<BodyRegister>,
		res: Response<ViewRegister | ErrorType>,
	) {
		try {
			const { email, firstName, secondName, password } = req.body;

			const registerdUser = await authService.register({
				email,
				firstName,
				secondName,
				password,
			});

			res.status(HTTP_STATUSES.OK_200).json(registerdUser);
		} catch (error) {
			if (error instanceof DBError) {
				res.status(error.status).json({ message: error.message });
				return;
			}
			sendError({ message: "Не удалось зарегистрироваться", error, res });
		}
	},

	async login(
		req: RequestWithBody<BodyLogin>,
		res: Response<ViewLogin | ErrorType>,
	) {
		try {
			const { email, password } = req.body;

			const loginnedUser = await authService.login({ email, password });

			res.status(HTTP_STATUSES.OK_200).json(loginnedUser);
		} catch (error) {
			if (error instanceof DBError) {
				res.status(error.status).json({ message: error.message });
				return;
			}
			sendError({ message: "Не удалось войти в систему", error, res });
		}
	},
};
