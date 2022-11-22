import TasksModel from "../models/tasksModel";
import ITasks from "../interfaces/Itasks";

export default class TasksService {
  constructor(private tasksModel: TasksModel) {}

  public async getTasks(): Promise<ITasks[] | [] | unknown> {
    return await this.tasksModel.getTasks();
  } 
}