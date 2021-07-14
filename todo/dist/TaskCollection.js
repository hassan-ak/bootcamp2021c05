"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task_1.Task(this.nextId, task));
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    taskDone(taskId) {
        let task = this.tasks.find((task) => task.taskId == taskId);
        task.done = true;
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.done);
    }
    printAll() {
        this.tasks.forEach((task) => {
            task.printTask();
        });
    }
}
exports.TaskCollection = TaskCollection;
