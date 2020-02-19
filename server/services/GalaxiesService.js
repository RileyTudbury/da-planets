import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxiesService {
  async getAll() {
    return await _repository.find({});
  }
}

const galaxiesService = new GalaxiesService();
export default galaxiesService;
