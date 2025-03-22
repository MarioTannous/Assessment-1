class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
  
    addTask(name: string): void {
      if (typeof name !== 'string') {
        throw new Error('Task name must be a string');
      }
      
      if (name.trim() === '') {
        throw new Error('Task name cannot be empty');
      }
  
      const newTask = {
        id: this.currentId,
        name,
        status: 'Pending', 
      };
      this.tasks.push(newTask);
      this.currentId++;
    }
  
    completeTask(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }
      if (task.status === 'Completed') {
        throw new Error(`Task with ID ${id} is already completed`);
      }
      task.status = 'Completed'; 
    }
  
    displayTasks(): void {
      if (this.tasks.length === 0) {
        console.log('No tasks available.');
        return;
      }
      
      this.tasks.forEach(task => {
        console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
      });
    }
  }
  
  const taskManager = new TaskManager();
  taskManager.addTask('Learn TypeScript');
  taskManager.completeTask(1);
  taskManager.displayTasks(); 
  