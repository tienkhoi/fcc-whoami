var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get("/api/whoami", function(req, res) {

    result = {
        "ipaddress": req.headers['x-forwarded-for'],
        "language":  req.headers['accept-language'].split(";")[0].split(",")[0],
        "software":  req.headers['user-agent'].split(")")[0].split("(")[1]
    };
    console.log(req.headers);
    
    res.json(result)

});



app.listen(port);
