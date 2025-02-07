class EventDatesDTO {
    constructor(orderId, serviceId, eventDate, eventStartTime, eventEndTime, status) {
        this.orderId = orderId;
        this.serviceId = serviceId;
        this.eventDate = eventDate;
        this.eventStartTime = eventStartTime;
        this.eventEndTime = eventEndTime;
        this.status = status;
    }

    fromModel(eventDate) {
        this.orderId = eventDate.orderId;
        this.serviceId = eventDate.serviceId;
        this.eventDate = eventDate.eventDate;
        this.eventStartTime = eventDate.eventStartTime;
        this.eventEndTime = eventDate.eventEndTime;
        this.status = eventDate.status;
    }
}

module.exports = EventDatesDTO;