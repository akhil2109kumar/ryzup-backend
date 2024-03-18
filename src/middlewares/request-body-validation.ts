import { userValidations } from "../utils/validations/index";
import traceAndThrowError from "../utils/errorHandling/custom-error";
import { appConstants } from "../config/app-constants/constants";
import { Request, Response, NextFunction } from "express"

export const userReqBodyValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("body...", req.body.userAuth)
        if (!req.body.userAuth) {
            throw new Error(appConstants.httpCodeWithMessage.notFound[1])
        }
        const validatedBody = await userValidations('userAuth', req.body.userAuth);
        console.log("bodddfdfdfy", req.body)

        //@ts-ignore
        req.validatedBody = validatedBody;
        next()
    } catch (error) {
        console.log(error)
        const mappedError = traceAndThrowError(error);
        next(mappedError);
    }
};