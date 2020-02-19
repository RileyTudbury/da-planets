import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonsService {

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

const moonsService = new MoonsService();
export default moonsService;
