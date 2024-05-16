const express = require('express');
const { sequelize,checkDB } = require('./dbConnect/dbConnect');
const server = express()


server.use(express.json());

const router=require('./Router/router');

server.use('/stu',router)

const port=5000;
server.listen(port,function  check(error) {
    if(error)
        {
            console.log("Error in port...!!!")
        }
    else{
        console.log(`server is running on https://localhost:${port}`)
        checkDB();
    }
});
