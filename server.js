const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const path = require('path');
const express = require('express');
const session = require('express-session');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {

  secret: process.env.SUPER_SECRET,
  cookie: { 
    
    maxAge: 60 * 60 * 1000 

    },
  resave: false,
  saveUninitialized: false,
  rolling: true,
  store: new SequelizeStore({

    db: sequelize,

  }),

};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {

  app.listen(

    PORT, () => console.log(`Now listening at your localhost:${PORT}!`)

  );

});