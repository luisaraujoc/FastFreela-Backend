class PeopleDTO {
    constructor(id, name, mother, cpf, birthDate, email)
    {
        this.id = id;
        this.name = name;
        this.mother = mother;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.email = email;
    }

    fromModel(people){
        this.id = people.id;
        this.name = people.name;
        this.mother = people.motherName;
        this.cpf = people.cpf;
        this.birthDate = people.birthDate;
        this.email = people.email;
    }
}