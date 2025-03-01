import { json, urlencoded } from "express";
import authRoutes from "./api/auth/auth.routes.js";
import userRoutes from "./api/user/user.routes.js";

export default async (app) => {
	app.use(json({ limit: "1mb" }));
	app.use(urlencoded({ extended: true, limit: "1mb" }));

	//routes comes here
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/users", userRoutes);
	// common error handling
};
