const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


const userSchema = new mongoose.Schema({
  Name : {
    type : String
  },
  Email :{
    type :String
  } ,

  Password : {
    type : String
  }
});


module.exports = new mongoose.model("ADMIN", userSchema);




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

