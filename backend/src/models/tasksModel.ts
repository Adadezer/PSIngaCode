import { PrismaClient, Tasks} from "@prisma/client";

export default class TasksModel {
  constructor(private orm: PrismaClient) {}

  public async getTasks(): Promise<Tasks[]| []>  {
    return await this.orm.tasks.findMany();
  }
}