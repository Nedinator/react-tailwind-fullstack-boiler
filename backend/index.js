const express = require('express');
const app = express();

PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port: ${PORT}`));
