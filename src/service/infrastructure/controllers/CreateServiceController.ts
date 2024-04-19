import { Request, Response } from "express";

import { CreateServiceOrderUseCase } from "../../application/CreateServiceUseCase";


export class CreateServiceController {
  constructor(readonly createServiceEUseCase: CreateServiceOrderUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const serviceE = await this.createServiceEUseCase.run(
        data.name,
        data.description
      );

      if (serviceE)
        res.status(201).send({
          status: "success",
          data: {
            id:serviceE?.id,
            name: serviceE?.name,
            description: serviceE?.description
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
