module.exports = (req, res, next) => {
  const path = req.path;
  console.log('path not found', path);
  res.status(404).end();
};
