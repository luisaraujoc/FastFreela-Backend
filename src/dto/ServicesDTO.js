class ServicesDTO{
    constructor(id, name, desc, descRich, price, avarageDuration, estimatedDelivery){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.descRich = descRich;
        this.price = price;
        this.avarageDuration = avarageDuration;
        this.estimatedDelivery = estimatedDelivery;
    }

    fromModel(service){
        this.id = service.id;
        this.name = service.name;
        this.desc = service.desc;
        this.descRich = service.descRichText;
        this.price = service.price;
        this.avarageDuration = service.avarageDuration;
        this.estimatedDelivery = service.estimatedDelivery;
    }
}