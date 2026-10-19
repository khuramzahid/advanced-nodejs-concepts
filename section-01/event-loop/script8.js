const start = process.hrtime.bigint();
const cpu0 = process.cpuUsage();

setTimeout(() => {
  const wallMs = Number(process.hrtime.bigint() - start) / 1e6;
  const cpu = process.cpuUsage(cpu0);
  const cpuMs = (cpu.user + cpu.system) / 1000;
  console.log(`wall time waiting: ${wallMs.toFixed(0)} ms`);
  console.log(`CPU time used:     ${cpuMs.toFixed(1)} ms`);
}, 2000);