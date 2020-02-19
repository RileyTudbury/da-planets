import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetsService {

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

const planetsService = new PlanetsService();
export default planetsService;
