let mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name:{ type: String, required: true, minlength: 3 },
    quantity: {type: Number, required:true, min:0},
    price: { type:Number, required:true, min:0},
    description:{type:String, required:true, minlength:3},
    image:{type:String, required:true, minlength:3},
    id:{type:Number, min:0}
},{timestamps: true });

const Product = mongoose.model('product', ProductSchema);