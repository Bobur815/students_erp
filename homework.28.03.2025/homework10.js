async function runTasks(tasks) {
    for (const task of tasks) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log(`${task} bajarildi`);
    }
  }
  
  (async () => {
    const tasks = ['task1', 'task2', 'task3'];
    await runTasks(tasks);
  })();