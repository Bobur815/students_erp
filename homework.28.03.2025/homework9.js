async function downloadFile() {
    let progress = 0;
    const fileName = "myfile.txt";
  
    while (progress < 100) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (Math.random() < 0.1) {
        throw new Error("Xatolik yuz berdi");
      }
  
      progress += 20;
      console.log(`Progress: ${progress}%`);
    }
    return fileName;
  }
  (async () => {
    try {
      const fileName = await downloadFile();
      console.log(`${fileName} yuklandi`);
    } catch (error) {
      console.log("Yuklashda xatolik");
    }
  })();
  