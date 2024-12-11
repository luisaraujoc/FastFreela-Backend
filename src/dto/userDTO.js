class UserDTO {
    constructor(id, name, email, role, active, personId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.active = active;
        this.personId = personId;
    }

    static fromModel(user) {
        return new UserDTO(
            user.id,
            user.name,
            user.email,
            user.role,
            user.active,
            user.personId
        );
    }
}