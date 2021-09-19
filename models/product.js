const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    property: {
        type: String,
        required: true
    },
    bedroom: {
        type: String,
        required: true

    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    furniture: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    note: {
        type: String
    },
    reporter: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

productSchema.method('toJSON', function(){
    const { __v, ...object } = this.toObject();
    const { _id:id, ...result } = object;
    return { ...result, id };
});


exports.Product = mongoose.model('Product', productSchema);