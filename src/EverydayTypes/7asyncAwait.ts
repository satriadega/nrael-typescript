async function asyncFunction(): Promise<void> {
  try {
    console.log("Start");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved");
      }, 2000);
    });
    const result = await promise;
    console.log(result);
    console.log("End");
    console.log("will be waiting!");
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
console.log("will not wait!");
