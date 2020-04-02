const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    let obj = {
        nome: 'Clebson',
        idade: 31
    }

    res.render('home', obj);
    
});



module.exports = router;