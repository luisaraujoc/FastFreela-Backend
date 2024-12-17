class StoreDTO {
    constructor(store) {
        this.id = store.id;
        this.name = store.name;
        this.cnpj = store.cnpj;
        this.email = store.email;
        this.active = store.active;
        this.phone = store.phone;
        this.adress = store.adress;
        this.services = store.services;
    }

    static fromModel(store) {
        return new StoreDTO(
            store.id,
            store.name,
            store.cnpj,
            store.email,
            store.phone,
            store.adress,
            store.services
        );
    }
}