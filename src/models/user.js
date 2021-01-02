const Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

    const user_schema = new Schema({
        name: {
            type: String,
        },
        id:{
            type: String,
        },
        email_id:{
            type: String,
        }
    });

    const users = Mongoose.model('users', user_schema, 'users'),

    createUser = (data) =>{
        return users.create(data);
    },
    findUser = (condition,projection) =>{
        return users.find(condition,projection);
    },
    deleteUser = (condition,projection) =>{
        return users.remove(condition);
    },
    updateUser = (condition,update_values) =>{
        return users.update(condition,update_values, {multi: true});
    };

    module.exports ={
        createUser,
        findUser,
        deleteUser,
        updateUser
    }
