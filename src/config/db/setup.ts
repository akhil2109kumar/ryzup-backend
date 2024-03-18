import mongoose, {ConnectOptions} from "mongoose";
import {APP_CONFIG} from "../app-config";

type ConnectionOptions = {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean
}

const options : ConnectionOptions & ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}

mongoose.set("strictQuery", false);

mongoose.connect(APP_CONFIG.DB_URL, options, (error:any) => {
   if(error) {
  console.log('error', `Error occured in Mongoose conenct ${error.message}`);
   }
});
