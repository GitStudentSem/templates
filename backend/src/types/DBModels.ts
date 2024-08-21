export type UserLoginDBModel = {
	email: string;
	firstName: string;
	secondName: string;
	passwordHash: string;
	userId: string;
	role: "user" | "admin" | "superadmin";
};
