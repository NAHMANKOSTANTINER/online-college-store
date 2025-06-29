const { default: chalk } = require('chalk');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(request,response)=>{
    response.write('Ivore Homepage!')
    response.end();

});
app.get('/prodacts',(request,response)=>{
    response.write('Ivore prodacts!')
    response.end();

});

app.listen(PORT ,function(){
    console.log(chalk.blue('server is running'))
});