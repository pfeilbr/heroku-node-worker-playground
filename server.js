let express = require("express");
let port = process.env.PORT || "5000";
let app = express();
app.get("*", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.listen(port, () => console.log(`app listening on port ${port}`));
