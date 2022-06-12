module.exports = (err, req, res, next) => {
  console.error('error on server', err);
  if (err.name === 'CastError') {
    res.status(400).send({error: `malformed id: ${err.value}`});
  } else {
    res.status(500).json({error: err});
  }
};
