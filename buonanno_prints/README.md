# Buonanno Prints

## Description

This project is a gallery style inventory to help view and update metadata on a collection of Italian Renaissance architectural prints. When an individual print listing is clicked, the user is taken taken to a "/details" view, where more information about the selected print is displayed. From "/details," the user has the ability to edit the listing and update the Title and Description of the selected print. An Admin view enables additional art genres to be added.

### Screenshots

#### Home

<img src="/wireframes/HomePage.jpeg" alt="Home Page" />

#### Details

<img src="/wireframes/DetailsPage.jpeg" alt="Details Page" />

#### Edit

<img src="/wireframes/EditPage.jpeg" alt="Edit Page" />

#### Admin

<img src="/wireframes/AdminPage.jpeg" alt="Admin Page" />

### Prerequisites

Software required to install the app (e.g. node).

- [Node.js](https://github.com/nvm-sh/nvm)
- [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `buonanno`
1. The queries in the `database.sql` file are set up to create the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I used Postico to create the queries.
1. Open up your editor of choice and run `npm install` from the project terminal
1. Run `npm run server`
1. Run `npm run client` in a separate terminal

## Technologies

- PERN stack (Postgres, Express, React, Node.js)
- Redux
- Redux-saga
- React-router-dom
- pg
- Axios
- Styled with Material UI

