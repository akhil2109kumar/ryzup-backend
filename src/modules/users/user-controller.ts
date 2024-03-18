import { UserCreadentialServicesInstance } from "./user-services";
import HttpResponse from "../../utils/httpResponse/all-http-response";
import traceAndThrowError from "../../utils/errorHandling/custom-error";
import { Request, Response, NextFunction } from "express";

const authUserController = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("server making request....", req)
    const { token, user } =
      await UserCreadentialServicesInstance.userAuth(req.validatedBody);
    const responseBody = HttpResponse.created({ user, token }, null);
    res.send(responseBody);
  } catch (error) {
    console.log("error from controller", error)
    const mappedError = traceAndThrowError(error);
    delete mappedError.body;
    next(mappedError);
  }
};


export {
  authUserController,
};
