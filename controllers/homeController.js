exports.index = (req, res)=>{
    let obj = {
       pageTitle: 'Página Home',
       userInfo: req.userInfo
    }

    res.render('home', obj);
    
};

