class LegalEntitiesDTO {
    constructor(id, cnpj, corporateName, fantasyName, adress, phone, stateRegistration, active) {
        this.id = id;
        this.cnpj = cnpj;
        this.corporateName = corporateName;
        this.fantasyName = fantasyName;
        this.adress = adress;
        this.phone = phone;
        this.stateRegistration = stateRegistration;
        this.active = active;
    }
    
    fromlegalEntity(legalEntity) {
        this.id = legalEntity.id;
        this.cnpj = legalEntity.cnpj;
        this.corporateName = legalEntity.corporateName;
        this.fantasyName = legalEntity.fantasyName;
        this.adress = legalEntity.adress;
        this.phone = legalEntity.phone;
        this.stateRegistration = legalEntity.stateRegistration;
        this.active = legalEntity.active;
    }
}

module.exports = LegalEntitiesDTO;