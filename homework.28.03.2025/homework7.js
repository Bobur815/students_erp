const cache = {};
async function getData(key) {
  if (cache[key]) {
    console.log("Cache dan qaytdi:", key);
    return cache[key];
  }

  const newData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Yangi data for ${key}`);
    }, 1000);
  });

  cache[key] = newData;
  console.log("Yangi data yaratildi:", key);

  return newData;
}

(async () => {
  const result1 = await getData("key1");
  console.log("Natija 1:", result1);
  const result2 = await getData("key1");
  console.log("Natija 2:", result2);
})();
