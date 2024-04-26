'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, { // relação de One to Many, mas trabalhando na ponta do Many (belongsTo)
        foreignKey: 'category_id'
      });
      Course.belongsTo(models.User, {
        foreignKey: 'teacher_id'
      });
      Course.hasMany(models.Enrollment, {
        foreignKey: 'course_id'
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};