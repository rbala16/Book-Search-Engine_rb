const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI_rb|| 'mongodb://localhost/booksearchengine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
