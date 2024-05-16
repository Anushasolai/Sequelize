const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('SANSchool', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const checkDB= async()=>{
    try {
      await sequelize.authenticate();
      console.log(' successfully Connected to DB');
        } catch (error) {
      console.error('Error Connected to DB:', error);
        }
    }
    
module.exports={sequelize,checkDB};