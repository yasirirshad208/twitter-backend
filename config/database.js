import mongoose from "mongoose";

const connectDatabase = ()=>{
    mongoose.connect(process.env.URL).then(()=>{
        console.log("Mongodb is connected with server");
    }).catch((error)=>{
        console.log("Mongodb connection error: "+error);
    })
}
 
export default connectDatabase;