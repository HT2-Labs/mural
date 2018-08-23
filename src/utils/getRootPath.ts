export default (path: string) => {
  if (window.location.hostname === 'ht2-labs.github.io') {
    return `mural${path}`;
  }
  return path;
};
