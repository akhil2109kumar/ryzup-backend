import { appConstants } from "../../config/app-constants/constants";

const {
 httpCodeWithMessage
} = appConstants;

export interface Properties {
  status: number;
  message: string;
  body: any;
  errors: any;
}

class HttpResponse implements Properties {
  status: number;
  message: string = "";
  body: any = {};
  errors: any = {};

  constructor(status: any, message: any, body: any, errors: any) {
    this.status = status;
    this.message = message;
    if (body) {
      this.body = body;
    }
    this.errors = errors || [];
  }

  static created(body: any, err: any) {
    return new HttpResponse(httpCodeWithMessage.created[0], httpCodeWithMessage.created[1], body, err);
  }

  static OK(body: any, err: any) {
    return new HttpResponse(httpCodeWithMessage.OK[0], httpCodeWithMessage.OK[1], body, err);
  }

  static notFound(error: any) {
    return new HttpResponse(httpCodeWithMessage.notFound[0], httpCodeWithMessage.notFound[1], null, error);
  }

  static internalServer(error: any) {
    return new HttpResponse(httpCodeWithMessage.internalServer[0], httpCodeWithMessage.internalServer[1], null, error);
  }

  static badRequest(error: any) {
    return new HttpResponse(httpCodeWithMessage.badRequest[0], httpCodeWithMessage.badRequest[1], null, error);
  }

  static forbidden(error: any) {
    return new HttpResponse(httpCodeWithMessage.forbidden[0], httpCodeWithMessage.forbidden[1], null, error);
  }

}

export default HttpResponse;
