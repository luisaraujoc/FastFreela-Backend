import CancelattionReasonDAO from "../dao/CancelattionReasonDAO";
import CancelattionReasonDTO from "../dto/CancelattionReasonDTO";

class CancelattionReasonsController {
  // make a methods async with try catch block and extract the body from the request to variables for create a object with the DTO

  async createCancelattionReasons(req, res) {
    const { reason, orderId } = req.body;
    try {
      const cancelattionReason = new CancelattionReasonDTO(reason, orderId);
      const newCancelattionReason =
        await CancelattionReasonDAO.createCancelattionReasons(
          cancelattionReason
        );

      return res.status(201).json(newCancelattionReason);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getCancelattionReasonsById(req, res) {
    try {
      const cancelattionReason =
        await CancelattionReasonDAO.getCancelattionReasonsById(req.params.id);

      return res.status(200).json(cancelattionReason);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // getall
  async getAllCancelattionReasons(req, res) {
    try {
      const cancelattionReason =
        await CancelattionReasonDAO.getAllCancelattionReasons();

      return res.status(200).json(cancelattionReason);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
