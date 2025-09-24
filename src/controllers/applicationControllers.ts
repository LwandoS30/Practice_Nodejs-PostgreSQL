import { application, Request, Response } from "express";
import * as ApplicationService from "../services/applicationServices";

export const addApplication = async (req: Request, res: Response) => {
    try{
        const newApplication = await ApplicationService.createApplication(req.body);
        res.status(201).json(newApplication);
    }
    catch(error){
        res.status(500).json({message: "error in creating application"})
    }
};