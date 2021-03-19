const express = require('express');
const app = express();
const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRouter);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
  });
});