function pingServer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isOk = Math.random() > 0.5;
        resolve(isOk ? "OK" : "FAIL");
      }, 100);
    });
  }
  async function checkServerStatus() {
    for (let i = 1; i <= 3; i++) {
      const status = await pingServer();
      console.log(`Urinish ${i}:`, status);
  
      if (status === "OK") {
        return true;
      }
  
      if (i < 3) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  
    return false;
  }
  
  (async () => {
    const isOnline = await checkServerStatus();
    console.log(isOnline ? "Server ishlayapti" : "Server o'chiq");
  })();
  