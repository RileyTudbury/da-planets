import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarsService {

  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id)
  }

  async create(data) {
    return await _repository.create(data)
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }

}

const starsService = new StarsService();
export default starsService;
