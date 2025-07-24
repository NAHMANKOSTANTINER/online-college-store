const express = require('express');
const {default: chalk} = require('chalk');
const app = express();
const PORT = 3000;
const path = require('path');
const HomeController = require('./controllers/Home')
const ProductConroller = require('./controllers/Product');
const {sequelize} = require('./utils/database');
const { error } = require('console');

// HTTP -> GET, POST, DELETE , PUT

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

// Homepage
app.get('/', HomeController.mainPage);

app.get('/products', ProductConroller.showProducts);




app.listen(PORT, async function(){
    console.log(chalk.blue('Server is running!'));
    try{
        await sequelize.authenticate();
        console.log(chalk.green('connection has been established successfully'));
    }
    catch{
        console.error(chalk.red('Unable to connect to the database:', error));
    }
});