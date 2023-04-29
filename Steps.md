# Steps

## 1. node-typescript setup
```bash
npm init -y
npx tsconfig.json
yarn add =D nodemon @types/node ts-node typescript
```
Set scripts in package.json

## 2. mikroORM-setup
```bash
yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations
# for postgresql
yarn add @mikro-orm/postgresql pg
```
Configure postgres and add user as postgres and password as postgres. add db lireddit and grant postgres all privileges.

## 3. apollo-server-express-setup
```bash
yarn add express apollo-server-express graphql type-graphql@next
yarn add -D @types/express 
```