// [REMOVE]: This is dummy code for example
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong.");
};
