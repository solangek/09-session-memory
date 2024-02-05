const express = require('express');
const router = express.Router();

// it's a bad practice to use global variables in a web application
// instead we should define a model (based on the MVC architecture)
// and use a database to store the data
// but for the sake of simplicity we will use a global variable.
let globalVisitorsCount = 0;

/**
 * Browse the URL http://localhost:3000/ from 2 different browsers.
 * You will see that the globalVisitorsCount is incremented in both browsers.
 * on the other hand the localVisitorsCount is incremented only in the browser
 * since it is a session variable.
 *
 * Counts the number of visitors to the site and displays it (globalVisitorsCount).
 * Counts the user's visits to the site and displays it (per session).
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
router.get('/', function(req, res, next) {
  globalVisitorsCount++;

  if (req.session.localVisitorsCount) {
    req.session.localVisitorsCount++;
  }
  else { // first time we access session.views
    req.session.localVisitorsCount = 1
  }

  // render the index.ejs file and pass the globalVisitorsCount and localVisitorsCount
  res.render('index', {
    title: 'Visits',
    views: req.session.localVisitorsCount,
    globalVisitorsCount: globalVisitorsCount
  });

})

module.exports = router;
