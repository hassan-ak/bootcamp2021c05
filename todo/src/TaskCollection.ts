import { Task } from "./Task";

export class TaskCollection {
  private nextId = 1;
  private itemMap = new Map<number, Task>();
  constructor(public tasks: Task[] = []) {}
  public addTodo(task: string): void {
    let item: Task = new Task(this.nextId, task, false);
    this.nextId++;
    this.tasks.push(item);
    this.itemMap.set(this.nextId, new Task(this.nextId, task));
  }
  public getTodoById(id: number): Task {
    return this.itemMap.get(id);
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
