class PersonDTO {
    constructor(id, name, motherName, cpfCnpj, birthDate, email) {
        this.id = id;
        this.name = name;
        this.motherName = motherName;
        this.cpfCnpj = cpfCnpj;
        this.birthDate = birthDate;
        this.email = email;
    }

    static fromModel(person) {
        return new PersonDTO(
            person.id,
            person.name,
            person.motherName,
            person.cpfCnpj,
            person.birthDate,
            person.email
        );
    }
}