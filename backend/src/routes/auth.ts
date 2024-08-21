import express from "express";
import { getErrorSwaggerDoc } from "../assets/getErrorSwaggerDoc";
import { authController } from "../controllers/authController";
import { handleValidationErrors } from "../midlewares";
import { loginValidation, registerValidation } from "../validations";

import {
	BodyLoginSwaggerDoc,
	BodyRegisterSwaggerDoc,
	ViewLoginSwaggerDoc,
	ViewRegisterSwaggerDoc,
} from "../types/controllers/authController";

export const registerSwaggerDoc = {
	"/api/auth/register": {
		post: {
			tags: ["Авторизация"],
			summary: "Регистрация нового пользователя",
			requestBody: {
				content: {
					"application/json": {
						schema: BodyRegisterSwaggerDoc,
					},
				},
			},
			responses: {
				200: {
					description: "Успешная регистрация",
					content: {
						"application/json": {
							schema: ViewRegisterSwaggerDoc,
						},
					},
				},
				error: getErrorSwaggerDoc("Ошибка регистрации"),
			},
		},
	},

	"/api/auth/login": {
		post: {
			tags: ["Авторизация"],
			summary: "Логин пользователя",
			requestBody: {
				content: {
					"application/json": {
						schema: BodyLoginSwaggerDoc,
					},
				},
			},
			responses: {
				200: {
					description: "Успешный логин",
					content: {
						"application/json": {
							schema: ViewLoginSwaggerDoc,
						},
					},
				},
				error: getErrorSwaggerDoc("Ошибка логина"),
			},
		},
	},
};

export const getAuthRouter = () => {
	const router = express.Router();
	router.post(
		"/register",
		registerValidation,
		handleValidationErrors,
		authController.register,
	);
	router.post(
		"/login",
		loginValidation,
		handleValidationErrors,
		authController.login,
	);

	return router;
};
