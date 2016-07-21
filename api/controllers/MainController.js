var MainController = {
    index: function (req, res) {
        res.view('MainController/index');
        if (req.param('email') != undefined && req.param('name') != undefined) {
            console.log(req.param('email'));
            console.log(req.param('name'));

            EmailService.sendInviteEmail({email: req.param('email'), name: req.param('name')});
        }
    }
};
module.exports = MainController;