const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv:, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/your-database-name');
module.exports = mongoose.connection;