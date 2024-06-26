const database = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await database[this.model].findAll();
  }

  async getById(id) {
    return await database[this.model].findOne({ where: { id: Number(id) } });
  }

  async create(data) {
    return await database[this.model].create(data);
  }

  async update(data, id) {
    const update = await database[this.model].update(data, { where: { id: Number(id) } });

    if(update[0] == 0) {
      return false;
    } else {
      return true;
    }
  }

  async delete(id) {
    return await database[this.model].destroy({ where: { id: Number(id) } });
  }
 
}

module.exports = Services;