const express = require('express');
const app = express();

//routes
app.use('/', require('./routes/index'));

PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port: ${PORT}`));
