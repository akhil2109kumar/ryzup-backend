import jwt from "jsonwebtoken";
import User from '../modules/users/user-model';
import {APP_CONFIG} from "../config/app-config"
import traceAndThrowError from '../utils/errorHandling/custom-error'
import {appConstants} from "../config/app-constants/constants";
import {Request, Response, NextFunction} from "express"

const {httpCodeWithMessage} = appConstants;
const {JWT_USER_SECRET} = APP_CONFIG;

export const userAuthMiddleware = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        const decoded: any = jwt.verify(token, JWT_USER_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        });

        if(!user) throw new Error(httpCodeWithMessage.forbidden[1]);
        
        req.user = user;
        req.token = token;
        next()
    } catch (error) {
        const mappedError = traceAndThrowError(error);
        next(mappedError);
    }
};

