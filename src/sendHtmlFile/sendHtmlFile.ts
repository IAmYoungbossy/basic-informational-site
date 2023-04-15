import http from "http";
import { log } from "console";

export default function sendHtmlFile(
  data: Buffer,
  err: NodeJS.ErrnoException | null,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) {
  if (err) log(err);
  else res.end(data);
}
