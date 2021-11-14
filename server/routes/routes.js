const jobRoutes = require("./jobs");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Welcomel sdkfjlk sd");
  });

  jobRoutes(app, fs);
};

module.exports = appRouter;
