const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


const userSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
});


module.exports = new mongoose.model("User", userSchema);




// const userSchema = new mongoose.Schema( {
//     name: {
//       type: String,
//     //   required: true,
//     //   trim: true,

//     },

//     phone: {
//       type: String,
//     //   required: true,
//     //   trim: true,
//     //   unique: true,
//     },
//     phoneOtp: {String}
//     // role :{
//     //  type : String,
//     //  enum:["ADMIN","USER"],
//     //  default:"USER",
//     // },

// }
// );

