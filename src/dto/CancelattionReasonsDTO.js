class CancelattionReasonsDTO {
    constructor(orderId, reason) {

        this.orderId = orderId;
        this.reason = reason;
    }

    fromModel(model) {
        this.orderId = model.orderId;
        this.reason = model.reason;
    }
}

module.exports = CancelattionReasonsDTO;