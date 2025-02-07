class AdressDTO{
    constructor(id, street, number, city, state, country, district, complement, zipCode){
        this.id = id;
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
        this.country = country;
        this.district = district;
        this.complement = complement;
        this.zipCode = zipCode
    }

    fromModel(adress){
        this.id = adress.id;
        this.street = adress.street;
        this.number = adress.number;
        this.city = adress.city;
        this.state = adress.state;
        this.district = adress.district;
        this.complement = adress.complement;
        this.zipCode = adress.zipCode;
    }
}

module.exports = AdressDTO;