const User = require("../model/user")
// const { generateOTP, fast2sms } = require("../utils/otp.util");

const twilio = require('twilio');
const client = twilio("ACc290201cce35c8c6694fbcd9bc6922be", "23a95cae00806a1af7e7ee4a84d73491");


const createNewUser = async (req, res, next) => {
  const { phoneNumber } = req.body;


  const otp = Math.floor(100000 + Math.random() * 900000);


  try {
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: +13184904477 ,
      to: phoneNumber,
    });

    await User.findOneAndUpdate({ phoneNumber }, { otp }, { upsert: true });

    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
}


const verifyOtp = async(req,res) => {
    const {  otp } = req.body;

    const user = await User.findOne({ otp });
  
    if (user) {
    
      res.json({ success: true, message: 'OTP verified successfully' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid OTP' });
    }
  }






module.exports = {
  createNewUser,verifyOtp
}

// const createNewUser = async (req, res, next) => {
//     try {
//       let { phone, name } = req.body;


//       // check duplicate phone Number
//       const phoneExist = await User.findOne({ phone });

//       if (phoneExist) {
//         next({ status: 400, message:"" });
//         return;
//       }


//       // create new user
//       const createUser = new User({
//         phone,
//         name,
//       });

//       // save user

//       const user = await createUser.save();

//       res.status(200).json({
//         type: "success",
//         message: "Account created OTP sended to mobile number",
//         data: {
//           userId: user._id,
//         },
//       });

//       // generate otp
//       const otp = generateOTP(6);
//       // save otp to user collection
//       user.phoneOtp = otp;
//       await user.save();
//       // send otp to phone number
//       await fast2sms(
//         {
//           message: `Your OTP is ${otp}`,
//           contactNumber: user.phone,
//         },
//         next
//       );
//     } catch (error) {
//       next(error);
//     }
//   };














