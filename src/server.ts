import { Response, Request } from "express";
import { app } from "./app";
import logger from "./config/logger";

const PORT: number = parseInt(<string>process.env.PORT) || 3000;

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Page not found" });
  logger.error("Page not found");
});

app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  logger.info("Press CTRL-C to stop\n");
});
