const user_controller = require('../controllers/user_controller');
const item_controller = require('../controllers/user_controller');


module.exports = [

    //user routes
    { method: 'GET', path: '/users', config: user_controller.getUsers },
    // { method: 'POST', path: '/user', config: user_controller.addUser }

    //item routes
];