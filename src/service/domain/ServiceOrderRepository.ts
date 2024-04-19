import { ServiceOrder } from "./ServiceOrder";

export interface ServiceOrderRepository {
  createServiceOrder(name: string, description: string): Promise<ServiceOrder | null>;
}
