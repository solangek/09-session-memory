var express = require('express');
var router = express.Router();

let globalVisitorsCount = 0;

/**
 * GET home page.
 * Counts the number of visitors to the site and displays it (globalVisitorsCount).
 * Counts the user's visits to the site and displays it (per session).
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
router.get('/',function(req,
                        res, next) {
  globalVisitorsCount++;

  if (req.session.views) {
    req.session.views++;
  } else { // first time we access session.views
    req.session.views = 1
  }

  res.render('index', {
    title: 'Visits',
    views: req.session.views,
    globalVisitorsCount: globalVisitorsCount
  });

})



module.exports = router;
