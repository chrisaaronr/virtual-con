module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
    res.render("about.ejs");
  },
  getContact: (req, res) => {
    res.render("contact.ejs");
  },
};
