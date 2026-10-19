process.on('unhandledRejection', (reason) => {
  console.error('unhandled rejection:', reason.message);
  process.exitCode = 1;
});

Promise.reject(new Error('nobody caught me'));