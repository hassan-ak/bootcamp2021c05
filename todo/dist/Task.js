"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`ID = ${this.taskId}, \t\tTask = ${this.task}, \t\tCompleted = ${this.done}`);
    }
}
exports.Task = Task;
