class Controller {

  constructor(services) {
    this.services = services;
  }

  async getAll(req, res) {
    try {
      const results = await this.services.getAll();
      res.status(200).json(results); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;