const express = require('express');
const app = express();
const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRouter);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});