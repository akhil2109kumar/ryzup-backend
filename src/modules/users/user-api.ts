import {Router} from "express";
import { userReqBodyValidation } from "../../middlewares/request-body-validation";
import {authUserController} from "./user-controller";

const userRouter =  Router();

userRouter.post("/auth-user/secure", userReqBodyValidation, authUserController);


export default userRouter;
