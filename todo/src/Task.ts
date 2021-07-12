export class Task {
  public constructor(
    public taskId: number,
    public task: string,
    public done: boolean = false
  ) {}

  public printTask(): void {
    console.log(
      `ID = ${this.taskId}, \t\tTask = ${this.task}, \t\tCompleted = ${this.done}`
    );
  }
}
