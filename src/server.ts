import express from "express";
import { Signale } from "signale";
import dotenv from 'dotenv';
import cors  from 'cors';


dotenv.config()


import { serviceOrderRouter } from "./service/infrastructure/ServiceRouter";



const app = express();


const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

const signale = new Signale();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use("/service", serviceOrderRouter);

app.listen(SERVER_PORT, () => {
  signale.success("Server online in port 3000");
});
