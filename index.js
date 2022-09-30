const express = require("express");
const app = express();
const path = require("path");
const port = 3000;


// const harryMiddleware = (req, res, next) =>{
//   console.log(req)
//   next()
// }
//own middleware, req, res, next.

app.use(express.static(path.join(__dirname, "public")))
// app.use(harryMiddleware)
//middleware, keep access of request and response

app.get("/hello/:name", (req, res) => {
  res.send("Hello World! " + req.params.name);
});
//want to print name along with hello path, also print that name, then use this
//req.params.name put that code to use this functionality

app.get("/about", (req, res) => {
  //   res.send('about')
  // res.sendFile(path.join(__dirname, 'index.html'))
  // res.status(500)
  res.json({ harry: 34 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
