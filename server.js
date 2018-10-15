// DEPENDENCIES
const express = require('express');
const app = express();
const Missions = require('./models/marsMission.js')

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;
app.get('/', (req, res) => {
  res.send('This is missions app')
});
// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/missions', (req, res) => {
  const context = {
    missionLog: Missions
  }
  res.render('missions/index.ejs', context)
})
// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:index', (req, res) =>{
  const context = {
    mission: Missions[req.params.index]
  }
  res.render('missions/show.ejs', context)
})



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
