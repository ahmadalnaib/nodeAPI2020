const express= require("express");
const dontenv=require("dotenv");



// load env vars

dontenv.config({path:'./config/config.env'});


const app=express();


const PORT= process.env.PORT || 5000 ;

app.listen(PORT, () => {
  console.log(`THE SERVER RUN ON ${process.env.NODE_ENV} ON PORT ${PORT}`);
});