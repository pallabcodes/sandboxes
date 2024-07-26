// Database configuration file
module.exports = {
  url: process.env.DB_URL || 'mongodb://localhost:27017/myproject',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
