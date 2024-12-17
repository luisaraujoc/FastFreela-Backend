import { readdirSync } from "fs";
import { join } from "path";
import sequelize from "../config/database"; // Importa a instância do Sequelize

const models = {}; // Objeto para armazenar os modelos

// Lê todos os arquivos na pasta atual
readdirSync(__dirname)
  .filter((file) => 
    file.endsWith(".js") && file !== "index.js" // Exclui o próprio index.js
  )
  .forEach((file) => {
    const model = require(join(__dirname, file))(sequelize); // Inicializa o modelo
    models[model.name] = model; // Adiciona o modelo ao objeto
  });

// Configura as associações, se existirem
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models); // Chama o método de associação do modelo
  }
});

// Exporta os modelos e a instância do Sequelize
export default { sequelize, models };
