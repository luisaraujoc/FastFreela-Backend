class OrderServicesDTO {
    constructor(orderId, serviceId) {
        this.orderId = orderId;
        this.serviceId = serviceId;
    }

    fromModel(orderService) {
        this.orderId = orderService.orderId;
        this.serviceId = orderService.serviceId;
    }
}