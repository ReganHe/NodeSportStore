//Server side code to start here
//expressjs

var express = require('express');
var app = express();

var port = process.env.PORT || 3003;

//app.use('/api', require('body-parser').json());

app.use('/api', function(req, res, next){
    console.error(req.method + " " + req.url + "\n" + require('util').inspect(req.body));
    try {
        next();

    } catch(e) {
        console.error("Request failed " + require('util').inspect(req));
        console.error(req.method + " " + req.url);
        res.json(500, {message: "An unknown error occured.  Tell the devs it's " + req.method + " " + req.url});
    }
});

app.use('/api/products', require('./api/products'));

//return static assets
app.use(express.static('./public'));

//render the app server side
app.use('/', require('./render/render'));

if (require.main === module) {
    //console.log('App started goto - http://0.0.0.0:' + port);
    console.log('App started goto - http://localhost:' + port);
    app.listen(port);
}

module.exports = app;
