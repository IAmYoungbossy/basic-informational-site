import fs from "fs";
import http from "http";
import { log } from "console";
import setRoutes from "../setRoutes/setRoutes";
import sendHtmlFile from "../sendHtmlFile/sendHtmlFile";

export default function requestHandler(
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) {
  log({ req: req.method, res: req.url });

  // Sets Header to HTML content type.
  res.setHeader("Content-Type", "text/html");

  // Sets status code for unknown routes
  res.statusCode = 404;

  // Sets 404 page for unknown routes
  let fileName = "404.html";

  // Sends HTML files for known routes
  const setFilePath = (file: string) => (fileName = file);

  // Sends HTML file depending on visited route.
  setRoutes(req, setFilePath, res);

  // Reads HTML file in views directory
  fs.readFile(`./src/views/${fileName}`, (err, data) =>
    sendHtmlFile(data, err, res)
  );
}
