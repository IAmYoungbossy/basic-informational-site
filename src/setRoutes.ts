import fs from "fs";
import http from "http";
import sendHtmlFile from "./sendHtmlFile";

export default function setRoutes(
  req: http.IncomingMessage,
  setFilePath: (file: string) => string,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) {
  // Gets Homepage
  if (req.url === "/") {
    res.statusCode = 200;
    setFilePath("index.html");
  }
  // Gets About Us page
  else if (req.url === "/about-us") {
    res.statusCode = 200;
    setFilePath("about-us.html");
  }
  // Gets Contact Us page
  else if (req.url === "/contact-us") {
    res.statusCode = 200;
    setFilePath("contact-us.html");
  }
  // Sets CSS Styles
  else if (req.url === "/styles/styles.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    fs.readFile("./src/styles/styles.css", (err, data) =>
      sendHtmlFile(data, err, res)
    );
  }
  // Redirects to about-us page
  else if (req.url === "/about-me") {
    res.statusCode = 301;
    res.setHeader("Location", "/about-us");
    res.end();
  }
}
