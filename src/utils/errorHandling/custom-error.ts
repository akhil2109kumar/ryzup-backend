import HttpResponse from "../httpResponse/all-http-response";
import { appConstants } from "../../config/app-constants/constants";

const { httpCodeWithMessage } = appConstants;

const traceAndThrowError = (error: any) => {
    let errors;
    if (error.message.includes(httpCodeWithMessage.forbidden[1]) || error.name.includes("JsonWebTokenError")) {
        errors = [{ label: "Authentication", body: { message: httpCodeWithMessage.forbidden[1] } }];
        return HttpResponse.forbidden(errors);
    } else if (error.details) {
        // Throw error when joi validation gets failed.
        errors = error.details.map((errorKey: any) => {
             return {
                label: "joi validation",
                body: {message: errorKey.message}
            }
        });
        return HttpResponse.badRequest(errors)

    }
    else {
        errors = [{ label: "Internal", message: httpCodeWithMessage.internalServer[1] }];
        return HttpResponse.internalServer(errors);
    }
};

export default traceAndThrowError;
