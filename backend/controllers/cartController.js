import userModel from "../models/userModel.js"

//Add item to user cart
const addToCart=async(req,res)=>{
    try {
        const userId = req.user.id;
        let userData = await userModel.findById(userId);
        let cartData=userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})   
    }
}

//remove item from user cart
const removeFromCart=async(req,res)=>{
    try {
        const userId = req.user.id;
        const {itemId} = req.body;
        let userData=await userModel.findById(userId);
        let cartData=await userData.cartData;

        if (cartData[itemId] > 0) {
            cartData[itemId]  -= 1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Removed from cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

//fetch user cart data
const getCart=async(req,res)=>{
 try {
    const userId = req.user.id;
    let userData=await userModel.findById(userId);
    let cartData=await userData.cartData;

     res.json({success:true,cartData})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
 }
}

export {addToCart,removeFromCart,getCart}