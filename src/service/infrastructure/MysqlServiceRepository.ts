import { query } from "../../database/mysql";
import { ServiceOrder } from "../domain/ServiceOrder";
import { ServiceOrderRepository } from "../domain/ServiceOrderRepository";

export class MysqlServiceOrderRepository implements ServiceOrderRepository
{
  async createServiceOrder(
    name: string,
    description: string
  ): Promise<ServiceOrder | null> {
    let service = null;
    const sql = "INSERT INTO orders (name, description) VALUES (?,?)";
    const params: any[] = [name, description];
    try {
      const [result]: any = await query(sql, params);
      service = new ServiceOrder(result.insertId, name, description);
    } catch (error) {
      service = null;
    } finally {
      return service;
    }
  }
  
}
