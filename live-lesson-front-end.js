/**
 * Created by yantianyu on 2016/4/18 0018.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 3003;

app.use(express.static(__dirname + '/static'));

app.listen(port, function () {
    console.log('server on port ' + port);
});
