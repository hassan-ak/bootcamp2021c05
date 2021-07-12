"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
    }
    taskDone(taskId) {
        let task = this.tasks.find((task) => task.taskId == taskId);
        task.done = true;
    }
    printAll() {
        this.tasks.forEach((task) => {
            task.printTask();
        });
    }
}
exports.TaskCollection = TaskCollection;
