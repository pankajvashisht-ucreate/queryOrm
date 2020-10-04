const express = require("express");
const path = require("path");

const app = express();
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
	res.sendFile(path.join(buildPath, "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`website is working on port: ${port}`);
});
