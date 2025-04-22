class TaskManager {
    constructor() {
        this.tasks=[];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(id) {
        this.tasks=this.tasks.filter(task=>task.id!==id);
    }
    updateStatus(id, newStatus) {
        this.tasks=this.tasks.map(task => 
            task.id===id ? { ...task, status: newStatus } : task
        );
    }
    getTasks() {
        return this.tasks;
    }
    getTasksByStatus(status) {
        return this.tasks.filter(task=>task.status===status);
    }
}

let manager=new TaskManager();
manager.addTask({ id: 1, title: "Homework", status: "pending" });
manager.addTask({ id: 2, title: "Project", status: "in progress" });
manager.addTask({ id: 3, title: "Shopping", status: "pending" });

console.log(manager.getTasks()); 
manager.updateStatus(1, "completed");
console.log(manager.getTasksByStatus("completed")); 
manager.removeTask(2);
console.log(manager.getTasks());