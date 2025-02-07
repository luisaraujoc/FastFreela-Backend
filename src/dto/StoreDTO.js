class StoreDTO {
    constructor(id, name, active, email, phone, legalEntity) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.email = email;
        this.phone = phone;
        this.legalEntity = legalEntity;
    }

    fromModel(store) {
        this.id = store.id;
        this.name = store.name;
        this.active = store.active;
        this.email = store.email;
        this.phone = store.phone;
        this.legalEntity = store.legalEntity;
    }
}