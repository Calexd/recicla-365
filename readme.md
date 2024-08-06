# Recicla365

## O projeto:

O projeto "Recicla365" é uma plataforma destinada a facilitar a reciclagem e a gestão de resíduos. Permite que os usuários localizem e registrem pontos de coleta de resíduos, promovendo práticas sustentáveis e ecológicas. A plataforma ajuda os usuários a encontrar locais próximos onde podem depositar diferentes tipos de resíduos para a sua correta gestão e reciclagem.

## Rodar o repositório:

### Na primeira vez é necessário instalar as dependências:
1. `npm install`
2. `cp .env_example .env`

### Para rodar o repositório em ambiente local:
1. `npm run start:dev`

## Trabalhando com migrations:

### Criar uma migration:
1. Opção nº 1: `sequelize migration:generate --name nome_da_migracao`
2. Opção nº 2: `npx sequelize-cli migration:generate --name nome_da_migracao`

### Rodar uma migration:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. Opção nº 1: `sequelize-cli db:migrate:undo`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

### Reverter todas as migrations:
1. Opção nº 1: `sequelize-cli db:migrate:undo:all`
2. Opção nº 2: `npx sequelize-cli db:migrate:undo:all`

## Trabalhando com Seeders:

## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Trabalhando com Documentação:

### Gerar o documento do Swagger.json usando o AutoGen:
`npm run swagger`

## Bibliotecas utilizadas:

- sequelize
- pg
- sequelize-cli
- dotenv
- jsonwebtoken
- axios
- swagger-ui-express
- swagger-autogen