import  { Request, Response } from 'express';
import { incidentModel } from '../../data/models/incident.model';

export class IncidentController{

    public getIncidents = async (req:Request, res:Response) => {
        try {
            const incidents = await incidentModel.find();
            res.json(incidents)
        } catch (error) {
            
        }
    }

    public createIncidents = async (req:Request, res:Response) => {
        try {
            const {title, description, lat, lng} = req.body;
            const newIncident = await incidentModel.create({
                title,
                description,
                lat,
                lng
            })
            return res.json(newIncident);
        } catch (error) {
            
        }
    }

    public getIncidentById = async (req:Request, res:Response) => {
        const { id } = req.params;
        try {
            const incident = await incidentModel.findById(id);
            res.json(incident);
        } catch (error) {
            console.error(error)
        }
    }

    public updateIncident = async (req:Request, res:Response) => { 
        const { id } = req.params;
        const { title, description, lat, lng} = req.body;
        try {
            const incident = await incidentModel.findByIdAndUpdate(id, {
                title,
                description,
                lat,
                lng
            });
            res.json(incident);
        } catch (error) {
            console.error(error)
        }
    }

    public deleteIncident = async (req:Request, res:Response) => {
        const { id } = req.params;
        try {
            const incident = await incidentModel.findByIdAndDelete(id);
            res.json({message: "Registro borrado"});
        } catch (error) {
            console.error(error)
        }
    }

}