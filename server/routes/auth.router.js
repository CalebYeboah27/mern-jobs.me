import express from "express";

import { register, login, updateUser } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.route('/register').get(register).post(register);
authRouter.route('/login').get(login).post(login);
authRouter.route("/updateUser").get(updateUser).patch(updateUser);

export default authRouter;
