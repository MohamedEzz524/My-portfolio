export const throttle = (func, delay) => {
  let lastCall = 0; // Tracks the last execution time
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return; // Skip if delay hasn't passed
    lastCall = now;
    func.apply(this, args);
  };
};
