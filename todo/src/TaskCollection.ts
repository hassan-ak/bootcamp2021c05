import { Task } from "./Task";

export class TaskCollection {
  private nextId = 1;
  constructor(public tasks: Task[] = []) {}
  public addTodo(task: string): void {
    let item: Task = new Task(this.nextId, task, false);
    this.nextId++;
    this.tasks.push(item);
  }
  public taskDone(taskId: number): void {
    let task: Task = this.tasks.find((task) => task.taskId == taskId);
    task.done = true;
  }
  public printAll(): void {
    this.tasks.forEach((task) => {
      task.printTask();
    });
  }
}
