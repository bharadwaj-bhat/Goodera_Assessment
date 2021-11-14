const jobRoutes = (app, fs) => {
  const data = "./data.json";

  app.get("/jobs", (req, res) => {
    // console.log(data);
    fs.readFile(data, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = jobRoutes;
