const { connect, connection } = require('mongoose');

connect('mongodb://localhost/mattBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
