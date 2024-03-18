import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { APP_CONFIG } from "../../config/app-config";
import { appConstants } from "../../config/app-constants/constants";


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;
  return userObject;
};

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    APP_CONFIG.JWT_USER_SECRET
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCreadentials = async (email: string) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return {};
    }

    return { user };
  } catch (err) {
    //@ts-ignore
    let message: string = err.message;
    throw new Error(message);
  }
};

const User = mongoose.model("User", userSchema);

export default User;
