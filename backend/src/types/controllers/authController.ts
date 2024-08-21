import type { OpenAPIV3 } from "openapi-types";
import { defaultSwaggerValues } from "../../assets/settings";

//===========================================//
export const BodyRegisterSwaggerDoc: OpenAPIV3.SchemaObject = {
	type: "object",
	properties: {
		email: {
			type: "string",
			description: "Почта пользователя",
			default: defaultSwaggerValues.email,
		},
		password: {
			type: "string",
			description: "Пароль пользователя",
			default: defaultSwaggerValues.password,
		},
		firstName: {
			type: "string",
			description: "Имя пользователя",
			default: "Иван",
		},
		secondName: {
			type: "string",
			description: "Фамилия пользователя",
			default: "Иванов",
		},
	},
	required: ["email", "password", "firstName", "secondName"],
};
export type BodyRegister = {
	email: string;
	firstName: string;
	secondName: string;
	password: string;
	department: string;
};
//===========================================//

export const ViewRegisterSwaggerDoc: OpenAPIV3.SchemaObject = {
	type: "object",
	properties: {
		email: {
			type: "string",
			description: "Почта пользователя",
			default: defaultSwaggerValues.email,
		},
		firstName: {
			type: "string",
			description: "Имя пользователя",
			default: "Иван",
		},
		secondName: {
			type: "string",
			description: "Фамилия пользователя",
			default: "Иванов",
		},

		token: {
			type: "string",
			default: defaultSwaggerValues.authToken,
			description: "Токен авторизации",
		},
	},
};
export type ViewRegister = {
	email: string;
	firstName: string;
	secondName: string;
	token: string;
};
//===========================================//

export const BodyLoginSwaggerDoc: OpenAPIV3.SchemaObject = {
	type: "object",
	properties: {
		email: {
			type: "string",
			description: "Почта пользователя",
			default: defaultSwaggerValues.email,
		},
		password: {
			type: "string",
			description: "Пароль пользователя",
			default: defaultSwaggerValues.password,
		},
	},
	required: ["email", "password"],
};
export type BodyLogin = {
	email: string;
	password: string;
};
//===========================================//

export const ViewLoginSwaggerDoc: OpenAPIV3.SchemaObject = {
	type: "object",
	properties: {
		firstName: {
			type: "string",
			default: "Иван",
			description: "Имя",
		},
		secondName: {
			type: "string",
			default: "Иванов",
			description: "Фамилия",
		},
		token: {
			type: "string",
			default: defaultSwaggerValues.authToken,
			description: "Токен авторизации",
		},
	},
};
export type ViewLogin = {
	token: string;
	firstName: string;
	secondName: string;
};
//===========================================//
