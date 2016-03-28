exports.list=function(req,res,next){
    req.collections.products.find({}).toArray(function(error, products) {
        if (error) return next(error);
        res.send({products:products});
    });
};