const start = async () => {
  // these are here because without them the last fetch will
  // not segfault
  try { await fetch('http://ge.com'); } catch {}
  try { await fetch('http://www.ge.com'); } catch {}
  try { await fetch('https://ge.com'); } catch {}

  try {
    console.log('running fetch with verbose');
    await fetch('https://www.ge.com', { verbose: true });
  } catch (err) {
    console.error('this will not be called', err);
  }
};

start();

// results in:
// [1]    11094 segmentation fault  bun test-1.ts
