import userValidation from "./user-validation-schema"


const userValidations = (validationType:string, data:any): any => {
    console.log("working with data ...", validationType)
    switch(validationType) {
        case "userAuth": return userValidation.userAuthValidationSchema.validateAsync(data, {abortEarly: false});
        default: return "schema not found"
    }
};

export {userValidations};
