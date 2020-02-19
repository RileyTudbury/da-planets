import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxiesService {

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

const galaxiesService = new GalaxiesService();
export default galaxiesService;
