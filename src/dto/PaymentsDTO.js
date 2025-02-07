class PaymentsDTO {
    constructor(id, orderId, paymentDate, amount, paymentMethod, status) {
        this.id = id;
        this.orderId = orderId;
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.status = status;
    }

    fromModel(payment) {
        this.id = payment.id;
        this.orderId = payment.orderId;
        this.paymentDate = payment.paymentDate;
        this.amount = payment.amount;
        this.paymentMethod = payment.paymentMethod;
        this.status = payment.status;
    }
}