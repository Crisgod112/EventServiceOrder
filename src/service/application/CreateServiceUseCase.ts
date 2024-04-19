import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";
import { NotificationServiceUSeCase } from "./Services/NotificationNewService";

export class CreateServiceOrderUseCase {
  constructor(
    readonly serviceOrderRepository: ServiceOrderRepository,
    readonly sendNotification: NotificationServiceUSeCase
  ) {}

  async run(
    name: string,
    description:string
  ): Promise<ServiceOrder | null> {
    
    try {
      const order = await this.serviceOrderRepository.createServiceOrder(name,description);
      if (order)
       this.sendNotification.run(order);
      return order;
    } catch (error) {
      return null;
    }
  }
}
