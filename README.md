# Collective Search

A standalone application for searching Open Collective for collectives.

## Process

- [X] scaffold Express application with Handlebars templating (I like the simplicity with layouts, partials, and other helpers)
- [X] bootstrap models with sequelize (the CLI makes managing seeders, migrations, and model generation really nice)
- [X] seed Collectives data from CSV using Postgres COPY FROM command through node-postgres library
- [X] build index view (styled with Tachyons) with simple search box to return all active collectives
  - each Collective "card" will contain the name, image (with general fallback), description, and link to collective page
- [X] initially filter search results by ILIKE collective name
- [X] add Postgres Full Text Search support and indexing to search collective name, description, tags
- [X] show 20 most-recently updated Collectives in index route
- add footer with links to application source code and Open Collective home

## Setup Steps

- run `npm install` to install dependencies && devDependencies
- cp .env.example to .env && configure PG variables
- call `npm run db:setup` to run database setup commands
  - runs `sequelize db:create` to create development database
  - runs `sequelize db:migrate` to run all pending migrations
  - runs `sequelize db:seed:all` to seed initial collective data from data/collectives.csv

## Start

`npm start` will start the application server using [`nodemon`](https://www.npmjs.com/package/nodemon) and listen on the port configured to the `PORT` environment variable or default to 8080.
