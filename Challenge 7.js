var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.currentId = 1;
    }
    TaskManager.prototype.addTask = function (name) {
        if (typeof name !== 'string') {
            throw new Error('Task name must be a string');
        }
        if (name.trim() === '') {
            throw new Error('Task name cannot be empty');
        }
        var newTask = {
            id: this.currentId,
            name: name,
            status: 'Pending',
        };
        this.tasks.push(newTask);
        this.currentId++;
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (!task) {
            throw new Error("Task with ID ".concat(id, " not found"));
        }
        if (task.status === 'Completed') {
            throw new Error("Task with ID ".concat(id, " is already completed"));
        }
        task.status = 'Completed';
    };
    TaskManager.prototype.displayTasks = function () {
        if (this.tasks.length === 0) {
            console.log('No tasks available.');
            return;
        }
        this.tasks.forEach(function (task) {
            console.log("Task ID: ".concat(task.id, ", Name: \"").concat(task.name, "\", Status: ").concat(task.status));
        });
    };
    return TaskManager;
}());
var taskManager = new TaskManager();
taskManager.addTask('Learn TypeScript');
taskManager.completeTask(1);
taskManager.displayTasks();
