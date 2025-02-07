import EventDatesDTO from "../dto/EventDatesDTO";
import EventDatesDAO from "../dao/EventDatesDAO";

class EventDatesController {

  async createEventDates(req, res) {
    const {
      orderId,
      serviceId,
      eventDate,
      eventStartTime,
      eventEndTime,
      status,
    } = req.body;

    try {
      const eventDatesDTO = new EventDatesDTO(
        orderId,
        serviceId,
        eventDate,
        eventStartTime,
        eventEndTime,
        status
      );
      const eventDatesDAO = new EventDatesDAO();

      const newEventDates = await eventDatesDAO.createEventDates(eventDatesDTO);

      return res.status(201).json(newEventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async getEventDatesById(req, res) {
    const { id } = req.params;

    try {
      const eventDatesDAO = new EventDatesDAO();

      const eventDates = await eventDatesDAO.getEventDatesById(id);

      return res.status(200).json(eventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  // get by order
  async getEventDatesByOrder(req, res) {
    const { orderId } = req.params;

    try {
      const eventDatesDAO = new EventDatesDAO();

      const eventDates = await eventDatesDAO.getEventDatesByOrder(orderId);

      return res.status(200).json(eventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  // get by service
  async getEventDatesByService(req, res) {
    const { serviceId } = req.params;

    try {
      const eventDatesDAO = new EventDatesDAO();

      const eventDates = await eventDatesDAO.getEventDatesByService(serviceId);

      return res.status(200).json(eventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async updateEventDates(req, res) {
    const { id } = req.params;
    const {
      orderId,
      serviceId,
      eventDate,
      eventStartTime,
      eventEndTime,
      status,
    } = req.body;

    try {
      const eventDatesDTO = new EventDatesDTO(
        orderId,
        serviceId,
        eventDate,
        eventStartTime,
        eventEndTime,
        status
      );
      const eventDatesDAO = new EventDatesDAO();

      const updatedEventDates = await eventDatesDAO.updateEventDates(
        eventDatesDTO,
        id
      );

      return res.status(200).json(updatedEventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async deleteEventDates(req, res) {
    const { id } = req.params;

    try {
      const eventDatesDAO = new EventDatesDAO();

      const deletedEventDates = await eventDatesDAO.deleteEventDates(id);

      return res.status(200).json(deletedEventDates);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
