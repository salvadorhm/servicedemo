var EmailService = {
    sendInviteEmail: function(options) {

var opts = {"type":"messages","call":"send","message":
    {
        "subject": "YourIn!",
        "from_email": "salvadorhm@gmail.com",
        "from_name": "Salvador HM",
        "to":[
            {"email": options.email, "name": options.name}
        ],
        "text": "Dear "+options.name+",\nYou're in the Beta! Click <insert link> to verify your account"
    }
};

console.log(opts);
    }
};

module.exports = EmailService;