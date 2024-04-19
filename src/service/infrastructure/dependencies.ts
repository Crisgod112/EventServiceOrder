import { CreateServiceOrderUseCase } from "../application/CreateServiceUseCase";


import { NotificationServiceUSeCase } from "../application/Services/NotificationNewService";
import { CreateServiceController } from "./controllers/CreateServiceController";


import { MysqlServiceOrderRepository } from "./MysqlServiceRepository";
import { NotificationNewService } from "./servicesRabbitMQ/NotificationNewProduct";

export const mysqlServiceERepository = new MysqlServiceOrderRepository();
export const servicesNotification = new NotificationNewService();

export const serviceNotificationUseCase = new NotificationServiceUSeCase(
  servicesNotification
);
export const createServiceOrderUseCase = new CreateServiceOrderUseCase(
  mysqlServiceERepository,
  serviceNotificationUseCase
);


export const createServiceOrderController = new CreateServiceController(
  createServiceOrderUseCase
);
