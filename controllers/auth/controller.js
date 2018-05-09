const User = require('../../models/user-model');
let controller = {};

controller.getLogin = (req, res) => {
    if (req.user){
        res.redirect('/')
    } else {
        res.render('login', { user: req.user });
    }
}