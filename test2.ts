const start = async () => {
  console.log('running fetch with verbose');
  await fetch('https://www.ge.com', { verbose: true });
  // this one does not error
};

start();
