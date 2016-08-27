var mongoose = require('mongoose');

module.exports = {
  connect: function (mode, callback) {
    // let url = 'mongodb://localhost/freetravel-db';
    // let url = 'mongodb://<Leonard>:<liutao19950414>@ds017726.mlab.com:17726/freetravel-db';
    let url = 'mongodb://Leonard:liutao19950414@ds017736.mlab.com:17736/freetravel-db';
    if (mode === 'test') {
      url = 'mongodb://localhost/freetravel-test-db';
    }
    console.log('--db connect success');
    mongoose.connect(url, callback);
  },
  close: function (callback) {
    mongoose.connection.close(callback);
  }
};
