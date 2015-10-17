var request = require('superagent');
var WebAPIUtil = {
  getRemoteInfo: function(){
    //http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true
    return new Promise(function (resolve, reject) {
        // simulate an asynchronous action where data is fetched on
        // a remote server somewhere.
        request
           .get('http://www.filltext.com/')
           .query({ rows: '10' })
           .query({ fname: "{firstName}" })
           .query({ lname: '{lastName}' })
           .on('error', function(err, res){
            reject(err);
           })
           .end(function(err, res){
                resolve(res);
           });
    });
  }
}
module.exports = WebAPIUtil;
