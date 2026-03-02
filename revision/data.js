const http = require("http");
const app = http.createServer((req, res) => {
  res.write("This is Home")
  res.end();
});
app.listen(3000);
