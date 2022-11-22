import { Request, Response } from 'express';
import TasksService from '../services/tasksService';

export default class getTasks {
  constructor(private tasksService: TasksService) {}

  public async getTasks(_req: Request, res: Response): Promise<Response | void> {
    try {
      const allTasks = await this.tasksService.getTasks();
      return res.status(200).json(allTasks);
    } catch (error) {
      console.log(error);
    }
  }
}