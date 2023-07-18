module.exports = {
    getHome: (req, res) => {
      res.render("home.ejs");
    },
    getCreateConf: (req, res) => {
      res.render("createConf.ejs");
    },
  };
  