# Court Backend Setup Guide

## Setup Database

Go to terminal and run
command: ```psql -U postgres```

Execute these commands one by one after that.
Make sure to terminate each command with ;

```sql
CREATE USER court;
CREATE DATABASE court;
GRANT ALL PRIVILEGES ON DATABASE court TO court;
ALTER USER court WITH LOGIN;
\c court postgres
GRANT ALL ON SCHEMA public TO court;
```

# How to create migrations with typeorm?

## Syntax:
```
npx typeorm migration:create <path>
```

## Example:
```
npx typeorm migration:create ./src/migrations/MyMigration
```

# Generating migrations

When you make any changes in entities, you can run ```yarn generate``` and it will
automatically generate migration for you which you can run afterwards.

# How to run migrations?

In Development you can run
```
yarn migrate:dev
npm run migrate:dev 
```
In production you can run
```
yarn migrate
npm run migrate
```

# How to rollback migrations?

In Development you can run
```
yarn revert:dev
npm run revert:dev 
```
In production you can run
```
yarn revert
npm run revert
```

# How to seed data?

In Development you can run
```
yarn seed:dev
npm run seed:dev 
```
In production you can run
```
yarn seed
npm run seed
```

# How to create a production build

You need to run ```yarn build```
Afterwards you can run the production build by ```yarn start```
Make sure you configure ```.env.production```.