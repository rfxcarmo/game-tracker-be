import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SwitchSchema = new Schema({
    id: ObjectId,
    name: String,
});

const SwitchModel = mongoose.model("switch-wishlist", SwitchSchema);

export default SwitchModel;