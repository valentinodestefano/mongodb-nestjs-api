import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});