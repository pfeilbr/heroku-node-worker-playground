function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  while (true) {
    console.log(`worker: ${new Date()} - doing some work`);
    await sleep(2000);
  }
})();
