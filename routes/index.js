const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/signup", (req, res) => {
  res.json(req.body)
})
module.exports = router;
