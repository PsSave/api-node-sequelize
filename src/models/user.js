'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Essa linha é nova e define o nome da tabela no banco de dados que será criada para armazenar os usuários do sistema.
    // colocamos tableName: 'users' para que a tabela no banco de dados seja chamada de users e nao haja conflito com a tabela User que é criada automaticamente pelo sequelize.
  });
  return User;
};