// [REMOVE]: This is dummy code for example
exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Access denied.");
  }

  // Add authentication logic here
  next();
};
