import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SonySchema = new Schema({
    id: ObjectId,
    img: String,
    name: String,
    url: String,
    finalPrice: String,
    originalPrice: String,
    discountDate: String,
    priority: String,
    releaseDate: String,
    tags: Array
});

const SonyModel = mongoose.model("sony-wishlist", SonySchema);

export default SonyModel;