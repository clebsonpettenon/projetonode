exports.userMiddleware = (req, res, next)=>{
    let info = {name: 'Clebson'};
    req.userInfo = info;
    next();
};

exports.index = (req, res)=>{
    let obj = {
       pageTitle: 'Página Home',
       userInfo: req.userInfo
    }

    res.render('home', obj);
    
};

