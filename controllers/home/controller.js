let controller = {};

controller.home = (req, res) => {
    res.render('home', { user: req.user });
}

module.exports = controller;