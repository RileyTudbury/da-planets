import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxiesService {


  async getAll() {
    return await _repository.find({});
  }


  async findById(id) {
    throw new Error("Method not implemented.");
  }

  async create(body) {
    throw new Error("Method not implemented.");
  }


  async update(id, body) {
    throw new Error("Method not implemented.");
  }

  async delete(id) {
    throw new Error("Method not implemented.");
  }

}

const galaxiesService = new GalaxiesService();
export default galaxiesService;
