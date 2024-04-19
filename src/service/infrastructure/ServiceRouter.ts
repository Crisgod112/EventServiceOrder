import express from "express";

import {
  createServiceOrderController,
} from "./dependencies";

export const serviceOrderRouter = express.Router();


serviceOrderRouter.post(
  "/",
  createServiceOrderController.run.bind(createServiceOrderController)
);
