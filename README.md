# NEWS API PROJECT

### Run Project for development

- `cp .env.example .env` and replace api key for `VITE_API_KEY`
- `yarn install` to install Dependencies
- `yarn start` to start the application locally http://127.0.0.1:3000/
- as a default project will be running in port 3000, and if you would like to the port you can change in package.json `vite --port {port}`

### To run project with docker

- `cp .env.example .env` and replace api key for `VITE_API_KEY`
- `docker-compose up -d --build` to start
- `docker-compose down` to stop

### Build Project for production

- yarn build

### Testing

- `yarn test`


### Dependencies used in this project

- Normal Dependencies
    - vuetify (Ui component library)
    - vue-router (router switching on SPA)
    - vuex (state management)
    - moment.js (date formatter)

- Dev Dependencies
    - vite 
    - prettier, eslint, eslint airbnb (code formatting)
    - happy-dom, vitetest, @vue/test-utils (for testing)
