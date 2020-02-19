import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Moon = new Schema(
  {
    planetId: { type: ObjectId, ref: "Planet", required: true },
    starId: { type: ObjectId, ref: "Star", required: true },
    galaxyId: { type: ObjectId, ref: "Galaxy", required: true },
    title: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
