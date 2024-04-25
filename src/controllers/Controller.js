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

  async getById(req, res) {
    try {
      const id = req.params.id;
      const results = await this.services.getById(id);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const body = req.body;
      const results = await this.services.create(body);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const bodyUpdate = req.body;

    try {
      const results = await this.services.update(bodyUpdate, id);
      if(!results) {
        res.status(404).json({ message: 'Not found' });
      } else {
        res.status(200).json({ message: 'Updated' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const results = await this.services.delete(id);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;