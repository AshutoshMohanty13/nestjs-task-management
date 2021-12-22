import { Injectable } from '@nestjs/common';
import { Task, TaskStatus} from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTask(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((ele) => [
            ele.id == id
        ]);
    }

    getTasksWithFilter(filterDto: GetTasksFilterDto): Task[]{
        const { status, search } = filterDto;
        let tasks = this.getAllTask();

        if (status) {
            tasks = tasks.filter((ele) => ele.status == status);
        }
        if (search) {
            tasks = tasks.filter((ele) => {
                if (ele.title.includes(search) || ele.description.includes(search)) {
                    return true;
                }
                return false;
            })
        }
        return tasks;

    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
                title,
                description,
                status: TaskStatus.OPEN
    };
    this.tasks.push(task);
    return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((ele) => ele.id != id)
    }

    updateTask(id: string, status: TaskStatus): Task{
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }


}
