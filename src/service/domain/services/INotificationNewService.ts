import { ServiceOrder} from "../ServiceOrder";

export interface INotificationNewService {
  sendNotification(serviceOrder: ServiceOrder): Promise<boolean>;
}
