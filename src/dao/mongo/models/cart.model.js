import mongoose from "mongoose";

const cartsCollection = "cart";

const cartSchema = new mongoose.Schema({
    products: [
        {
            _id: false,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
                min: [1, 'Quantity must be at least 1']
            }
        }
    ],
    active: {
        type: Boolean,
        default: true
    }
});

export const cartModel = mongoose.model(cartsCollection , cartSchema);