import mongoose from "mongoose";
export const connectDB= async ()=>{
await mongoose.connect('mongodb+srv://prasanth:2001@cluster0.pdhg1cs.mongodb.net/food-del').then(()=>{
    console.log("DB connected")
})

}