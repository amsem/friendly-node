const http = require('http')


http.createServer(function (req, res){
res.write("On the way to become something");
res.end();
}
).listen(3000);

console.log("server ohh yeahh 3000");
