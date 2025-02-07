const Address = require('./AdressModel');
const User = require('./UserModel');
const Store = require('./StoreModel');
const Service = require('./ServicesModel');
const Order = require('./OrdersModel');
const OrderServices = require('./OrderServicesModel');
const People = require('./PeopleModel');
const LegalEntity = require('./LegalEntitiesModel');
const PaymentMethod = require('./PaymentsModel');
const EventDate = require('./EventDatesModel');

// Relacionamentos entre Address e User (tabela adress_users - intermediária simples)
Address.belongsToMany(User, {through: 'adress_users', foreignKey: 'adresses_id'});
User.belongsToMany(Address, {through: 'adress_users', foreignKey: 'users_id'});

// Relacionamentos entre Store e Service (tabela store_services - intermediária simples)
Store.belongsToMany(Service, {through: 'store_services', foreignKey: 'stores_id'});
Service.belongsToMany(Store, {through: 'store_services', foreignKey: 'services_id'});

// Relacionamentos entre Store e User (tabela store_users - intermediária simples)
Store.belongsToMany(User, {through: 'store_users', foreignKey: 'stores_id'});
User.belongsToMany(Store, {through: 'store_users', foreignKey: 'users_id'});

// Relacionamentos entre People e LegalEntity (tabela people_legalsentities - intermediária simples)
LegalEntity.belongsToMany(People, {through: 'people_legalsentities', foreignKey: 'legalentities_id'});
People.belongsToMany(LegalEntity, {through: 'people_legalsentities', foreignKey: 'people_id'});

// Relacionamentos entre Order e Service (tabela order_services - com atributos adicionais)
Order.belongsToMany(Service, {
    through: {
        model: OrderServices, // Modelo necessário, pois a tabela tem atributos adicionais
    },
    foreignKey: 'orderId',
});
Service.belongsToMany(Order, {
    through: {
        model: OrderServices,
    },
    foreignKey: 'serviceId',
});

// Relacionamento entre Order e Store
Order.belongsTo(Store, {foreignKey: 'storeId'});
Store.hasMany(Order, {foreignKey: 'storeId'});

// Relacionamento entre Order e User
Order.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Order, {foreignKey: 'userId'});

// Relacionamento entre PaymentMethod e User
PaymentMethod.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(PaymentMethod, {foreignKey: 'userId'});

// Relacionamento entre EventDate, Order e Service
EventDate.belongsTo(Order, {foreignKey: 'orderId'});
Order.hasMany(EventDate, {foreignKey: 'orderId'});

EventDate.belongsTo(Service, {foreignKey: 'serviceId'});
Service.hasMany(EventDate, {foreignKey: 'serviceId'});

module.exports = {
    Address,
    User,
    Store,
    Service,
    Order,
    OrderServices,
    People,
    LegalEntity,
    PaymentMethod,
    EventDate,
};
