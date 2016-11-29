var express = require('express');
var index = require('./routes/index');
var app = express();

//config
app.use(express.static('public'));

// routes
app.use('/', index);
app.get('/info', function(request, response){
    var info = {
        "full_name" : "Ray Villalobos",
        "title" : "Staff Author",
        "links" : [
            { "blog"     : "http://iviewsource.com" },
            { "facebook" : "http://facebook.com/iviewsource" },
            { "podcast"  : "http://feeds.feedburner.com/authoredcontent" },
            { "twitter"  : "http://twitter.com/planetoftheweb" },
            { "youtube"  : "http://www.youtube.com/planetoftheweb" }
        ]
    };
    response.send(info);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});