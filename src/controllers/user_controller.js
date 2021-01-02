const user = require('../models/user');
const userValidation = require('../validations/user_validation'),
    userFactory = require('../factory/user_factory');


const getUsers = {
    validate: userValidation.getUsers,
    handler: userFactory.getUsers
};

module.exports = {
    getUsers
    };