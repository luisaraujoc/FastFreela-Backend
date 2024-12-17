class AdressDTO {
  constructor(adress) {
    this.id = adress.id;
    this.street = adress.street;
    this.number = adress.number;
    this.complement = adress.complement;
    this.district = adress.district;
    this.city = adress.city;
    this.state = adress.state;
    this.zipCode = adress.zipCode;
    this.userId = adress.userId;
  }

  static fromModel(adress) {
    return new AdressDTO(
      adress.id,
      adress.street,
      adress.number,
      adress.complement,
      adress.district,
      adress.city,
      adress.state,
      adress.zipCode,
      adress.userId
    );
  }
}