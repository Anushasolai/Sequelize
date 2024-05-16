// const { sequelize } = require('../dbConnect/dbConnect');
// const { DataTypes }=require('sequelize');

// const Student = sequelize.define('Student',
//     {
       
//         stname:{
//             type:DataTypes.STRING
//         },
//         course:{
//             type:DataTypes.STRING
//         },
//         fee:{
//             type:DataTypes.INTEGER
//         },
//     });
   
//     Student.sync()
//     .then(() => {
//         console.log('Student table created successfully!');
//     })
//     .catch((error) => {
//         console.error('Unable to create table : ', error);
//     });
// module.exports=Student;



const { sequelize } = require('../dbConnect/dbConnect');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    fee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    }
}, {
    tableName: 'Students', // Optional: define the table name explicitly
    timestamps: false // Disable timestamps if you don't want createdAt and updatedAt fields
});

Student.sync()
    .then(() => {
        console.log('Student table created successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

module.exports = Student;
