function convertTime(ts) {
  // Calculate hours
  const h = Math.floor(ts / 3600);

  // Remaining seconds after hours
  const remainingSeconds = ts - h * 3600;

  // Calculate minutes
  const m = Math.floor(remainingSeconds / 60);

  // Remaining seconds after minutes
  const s = remainingSeconds - m * 60;

  console.log(`Hours: ${h}, Minutes: ${m}, Seconds: ${s}`);
}

convertTime(3700); // Hours: 1, Minutes: 1, Seconds: 40
