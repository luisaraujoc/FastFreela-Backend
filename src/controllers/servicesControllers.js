const ServiceDTO = require('../dto/servicesDTO');
const ServiceDAO = require('../dao/servicesDAO');

class ServicesController {
    async getAllServices(req, res) {
        try {
            const services = await ServiceDAO.getAllServices();
            const serviceDTOs = services.map(ServiceDTO.fromModel);
            res.status(200).json(serviceDTOs);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar serviços." });
        }
    }

    async getServiceById(req, res) {
        try {
            const { id } = req.params;
            const service = await ServiceDAO.getServiceById(id);
            if (!service) {
                return res.status(404).json({ error: "Serviço não encontrado." });
            }
            res.status(200).json(ServiceDTO.fromModel(service));
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar o serviço." });
        }
    }

    async createService(req, res) {
        try {
            const serviceData = req.body;
            const newService = await ServiceDAO.createService(serviceData);
            res.status(201).json(ServiceDTO.fromModel(newService));
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar serviço." });
        }
    }

    async updateService(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedService = await ServiceDAO.updateService(id, updateData);
            if (!updatedService) {
                return res.status(404).json({ error: "Serviço não encontrado." });
            }
            res.status(200).json(ServiceDTO.fromModel(updatedService));
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar serviço." });
        }
    }
}

module.exports = new ServicesController();