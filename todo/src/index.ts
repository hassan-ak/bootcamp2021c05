import { Task } from "./Task";
import { TaskCollection } from "./TaskCollection";

let tcollection1: TaskCollection = new TaskCollection();
let tcollection2: TaskCollection = new TaskCollection();

tcollection1.addTodo("First Collection Task One");
tcollection1.addTodo("First Collection task Two");

tcollection2.addTodo("Second Collection Task One");
tcollection2.addTodo("Second Collection task Two");

tcollection1.taskDone(1);
tcollection2.taskDone(2);

// tcollection1.printAll();
console.log("*****************");
tcollection2.printAll();
console.log("*****************");
tcollection2.getTodoItems(false).forEach((item) => item.printTask());
