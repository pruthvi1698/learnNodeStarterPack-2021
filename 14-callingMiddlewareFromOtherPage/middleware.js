module.exports = function(req,res,next){
    console.warn("requesting url is", req.originalUrl);
    next();
}