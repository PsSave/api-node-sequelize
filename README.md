- ENTENDENDO O QUE É UM ORM
- USANDO SEQUELIZE COM NODE E PG
- SEQUELIZE CLI ( CRIA ESTRUTURAS PRONTAS)

para criar um model com sequelize utilizamos o comando:
 - npx sequelize-cli model:generate --name User --attributes name:string,email:string,cpf:string,active:boolean,role:string 

para fazermos uma migração para o BANCO utilizamos o comando:
 - npx sequelize-cli db:migrate

para criar seeds utilizamos o comando:
 - npx sequelize-cli seed:generate --name demo-user
 - npx sequelize-cli db:seed:{nome} // para adicionar a seed no BANCO

  Equipe.hasMany(Atleta);
  Atleta.belongsTo(Equipe);
    Ou seja, uma equipe tem vários (hasMany) atletas, mas atletas pertencem a (belongsTo) somente uma equipe cada.