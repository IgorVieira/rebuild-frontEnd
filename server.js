var http = require('http')
var app = require('./config/express')(app)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server is running in port:%d', app.get('port'));
})
