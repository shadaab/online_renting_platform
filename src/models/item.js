const Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

    const item_schema = new Schema({
        name: {
            type: String,
        },
        rent_price:{
            type: Number,
        },
        manufacturing_date:{
            type: Date,
        },
    });

    const items = Mongoose.model('items', item_schema, 'items'),

    createItem = (data) =>{
        return items.create(data);
    },
    findItem = (condition,projection) =>{
        return items.find(condition,projection);
    },
    deleteItem = (condition) =>{
        return items.remove(condition);
    },
    updateItem = (condition,update_values) =>{
        return items.updateMany(condition,update_values);
    };

    module.exports ={
        createItem,
        findItem,
        deleteItem,
        updateItem
    }
