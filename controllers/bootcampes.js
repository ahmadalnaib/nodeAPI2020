// @desc GET ALL BOOTCAMPS
// ROUTE GET/API/V1/BOOTCAMPS
// @ACCESS PUBLIC

exports.getBootcamps=(req,res,next) =>{
  res.status(200).json({success:true, msg:"show all bootcamps"});
  
}
// @desc GET single BOOTCAMPS
// ROUTE GET/API/V1/BOOTCAMPS/:id
// @ACCESS PUBLIC

exports.getBootcamp=(req,res,next) =>{
  res.status(200).json({success:true, msg:`get bootcamps ${req.params.id}`});
}
// @desc create new BOOTCAMP
// ROUTE post/API/V1/BOOTCAMPS
// @ACCESS private

exports.createBootcamp=(req,res,next) =>{
  res.status(200).json({success:true,msg:"create new bootcamps"})
}
// @desc update BOOTCAMP
// ROUTE put/API/V1/BOOTCAMPS/:id
// @ACCESS private

exports.updateBootcamp=(req,res,next) =>{
  res.status(200).json({success:true,msg:`update Bootcamps ${req.params.id}`})
}
// @desc delete BOOTCAMP
// ROUTE delete/API/V1/BOOTCAMPS/:id
// @ACCESS Private

exports.deleteBootcamp=(req,res,next) =>{
  res.status(200).json({success:true,msg:`delete Bootcamps ${req.params.id}`})
}