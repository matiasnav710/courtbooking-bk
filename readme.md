# Court Booking Backend

## Setting up .env.development file
JWT_SECRET=this_is_super_secret
PG_USER=postgres (change it with your database user)
PG_HOST=localhost
PG_DATABASE=court (create database with name court in postgresql)
PG_PASSWORD=password (change it with your database password)
PG_PORT=5432 (change it with the port running your local database )
PORT=3400

## start project
1. setup env as per above step
2. npm run migrate:dev (to run migrations)
3. npm run seed:dev (to seed some dummy data into app)
4. npm run dev (to run app in development)
