class OrdersDTO {
    constructor(id, userId, storeId, status, cancellationDeadline, totalPrice) {
        this.id = id;
        this.userId = userId;
        this.storeId = storeId;
        this.status = status;
        this.cancellationDeadline = cancellationDeadline;
        this.totalPrice = totalPrice;
    }

    fromModel(order) {
        this.id = order.id;
        this.userId = order.userId;
        this.storeId = order.storeId;
        this.status = order.status;
        this.cancellationDeadline = order.cancellationDeadline;
        this.totalPrice = order.totalPrice;
    }
}