const express= require("express");
const dontenv=require("dotenv");

//route files
const bootcamps=require('./routes/bootcamps');

// load env vars

dontenv.config({path:'./config/config.env'});


const app=express();


//mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT= process.env.PORT || 5000 ;

app.listen(PORT, () => {
  console.log(`THE SERVER RUN ON ${process.env.NODE_ENV} ON PORT ${PORT}`);
});