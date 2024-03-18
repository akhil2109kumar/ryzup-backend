import joi from "joi";

class UserValidation {
  userAuthValidationSchema;

  constructor() {
    console.log("working", "Fdfdfdd")
    this.userAuthValidationSchema = joi.object({
      email: joi.string().email().required(),
      userName: joi.string().required(),
    });
  }
}

const userValidationObject = new UserValidation();

export default userValidationObject;
