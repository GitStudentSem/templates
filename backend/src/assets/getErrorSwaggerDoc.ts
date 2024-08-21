export const getErrorSwaggerDoc = (description: string) => {
	return {
		description,
		content: {
			"application/json": {
				schema: {
					type: "object",
					properties: {
						message: {
							type: "string",
							default: description,
						},
					},
				},
			},
		},
	};
};
