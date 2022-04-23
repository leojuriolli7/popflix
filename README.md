# Popflix

Popflix is a movie and TV shows website, where one may find information about movies, shows, its cast, crew, reviews, production companies, seasons, episodes and more.

Popflix has Dark and light theme, and Portuguese and English translation options.

Access Popflix via Heroku: http://popflix-app.herokuapp.com/

## Tecnologies used in this project:

- ReactJS, Typescript
- React Redux Toolkit and Redux Persist
- Cypress for end-2-end tests
- i18Next for translations
- JSON Server for Login and Sign Up
- Formik and Yup
- Axios and React Query
- Styled Components with light and dark mode
- React Router

## Installation

While the version accessible through Heroku (main branch) does not have a Sign Up and Login system, the develop branch accessible through cloning the project has authorized routes and functional Login and Sign Up, with a profile page. This is the case because the JSON Server is not deployed on Heroku.

Clone the project:

```bash
git clone git@github.com:leojuriolli7/popflix.git
```

Go to the project directory:

```bash
cd popflix
```

Install the project dependencies:

```bash
npm install
```

## Usage

First, start JSON Server:

```bash
npm run json-server
```

Start the application:

```bash
npm start
```
