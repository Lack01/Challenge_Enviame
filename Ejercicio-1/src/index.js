const express = require('express');
const app = express();


//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index.routes'));
app.use('/api/empresas', require('./routes/empresas'));

app.use(express.json())

//app.use(empresasRoutes)
require('./database');
app.listen(3000);
console.log('Server on port', 3000);