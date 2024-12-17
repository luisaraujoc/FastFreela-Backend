class ServiceDTO {
    constructor(service) {
        this.id = service.id;
        this.name = service.name;
        this.descRichText = service.descRichText;
        this.desc = service.desc;
        this.price = service.price;
        this.averageDuration = service.averageDuration;
    }

    static fromModel(service) {
        return new ServiceDTO(
            service.id,
            service.name,
            service.descRichText,
            service.desc,
            service.price,
            service.averageDuration
        );
    }
}