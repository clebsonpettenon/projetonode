exports.notFoud = (req, res, next)=>{
    res.status = 404;
    res.render('../views/404');
}