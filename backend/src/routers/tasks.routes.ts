import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';
import TasksController from '../controllers/tasksController'
import TasksService from '../services/tasksService';
import TasksModel from '../models/tasksModel';

const router = Router();

const prisma = new PrismaClient();
const tasksModel = new TasksModel(prisma)
const tasksService = new TasksService(tasksModel)
const tasksController = new TasksController(tasksService);

router.get('/', async (req: Request, res: Response) => {
  tasksController.getTasks(req, res)
});

export default router;