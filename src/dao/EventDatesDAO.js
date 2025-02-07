const { Model } = require('sequelize');
const EventDates = require('../models/EventDatesModel');

class EventDatesDAO {
    async createEventDates(eventDates) {
        const newEventDates = await EventDates.create(eventDates);
        return newEventDates;
    }

    async getEventDatesById(id) {
        const eventDates = await EventDates.findByPk(id);
        return eventDates;
    }

    async updateEventDates(eventDates, id) {
        const updatedEventDates = await EventDates.update(eventDates, {
            where: {
                id: id,
            }
        });
        return updatedEventDates;
    }

    async deleteEventDates(id) {
        const deletedEventDates = await EventDates.destroy({
            where: {
                id: id,
            }
        });
        return deletedEventDates;
    }
}