import http from "http";
import { log } from "console";
import requestHandler from "./requestHandler/requestHandler";

const server = http.createServer(requestHandler);

server.listen(3000, "localhost", () => {
  log("Listening for requests");
});
