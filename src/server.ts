import { Response } from "express";
import { app } from "./app";
import logger from "./util/logger";

const PORT: number = parseInt(<string>process.env.PORT) || 3000;

app.use((res: Response) => {
  res.status(404).send("404 - page not found");
  logger.debug("Page not found");
});

app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  logger.info("Press CTRL-C to stop\n");
});
