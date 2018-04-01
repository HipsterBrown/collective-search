# Collective Search

A standalone application for searching Open Collective for collectives.

## Process

- [X] scaffold Express application with Handlebars templating (I like the simplicity with layouts, partials, and other helpers)
- [X] bootstrap models with sequelize (the CLI makes managing seeders, migrations, and model generation really nice)
- seed Collectives data from CSV using Postgres COPY FROM command through node-postgres library
- build index view (styled with Tachyons) with simple search box to return all active collectives
  - each Collective "card" will contain the name, image (with general fallback), and link to collective page
- initially filter search results by ILIKE collective name
- add Postgres Full Text Search support and indexing to search collective name, description, tags

## Setup Steps

- run `npm install` to install dependencies && devDependencies
- cp .env.example to .env && configure PG variables
- call `npm run setup` to run setup scripts
  - runs `sequelize db:create` to create development database

## Start

`npm start` will start the application server using [`nodemon`](https://www.npmjs.com/package/nodemon) and listen on the port configured to the `PORT` environment variable or default to 8080.
