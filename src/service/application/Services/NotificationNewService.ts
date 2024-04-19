import { ServiceOrder } from "../../domain/ServiceOrder";
import { NotificationNewService } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificationServiceUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewService) {}

  async run(serviceE: ServiceOrder) {
    await this.serviceNotifiacion.sendNotification(serviceE);
  }
}
