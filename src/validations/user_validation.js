const Joi = require('joi');

const userValidation = (() => {

    return {

        getUser: {
          query:{
              name: Joi.string().required().example('476232').description('user name'),
              email_id: Joi.string().required().example('476232').description('user name')
             
          }
        }
    }
})();

module.exports = {
    userValidation
};