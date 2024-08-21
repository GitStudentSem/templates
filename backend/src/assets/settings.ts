export const settings = {
	MONGO_URI: process.env.mongoURI || "",
	JWT_SECRET: process.env.JWT_SECRET || "somthingStrangeString",
};

export const defaultSwaggerValues = {
	authToken:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzIwMjk4MzgyNTUyIiwiaWF0IjoxNzIwMzI3NzA3LCJleHAiOjE3MjI5MTk3MDd9.QgIn3VTLVckneB1EqROzpGTBm58iQhhYMd205g3F7Ag",
	email: "your_email@yandex.ru",
	password: "123456",
};
