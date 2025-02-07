class UserDTO {
    constructor(id, name, email, password, role, active, personId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.active = active;
        this.personId = personId;
    }

    fromModel(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
        this.active = user.active;
        this.personId = user.personId;
    }
}