const express = require("express");
const app = express();
const db = require("./models");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listenting on: http://localhost:${PORT}`);
    });
});

