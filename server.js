var express = require('express');
var app = express();
var uaParser = require('ua-parser-js');
var port = process.env.PORT || 8080;

app.get('', function(req, res){ 
    // Find the ip address and browser language using the headers object
    var ipAdd = req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"];
    // Use the user-agent-parser to parse OS info
    var ua = uaParser(req.headers['user-agent']);
    var os = ua.os.name + " " + ua.os.version;
    
    // Create and send JSON
    var responseJson = { "ipaddress": ipAdd, "language": language, "software": os}
    res.send(responseJson);
    
});


app.listen(port, function(){
    console.log("Server is running on port " + port);
});