import express from 'express';

import cors from 'cors';

import tasksRouter from './routers/tasks.routes'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/tasks', tasksRouter)

export default app;