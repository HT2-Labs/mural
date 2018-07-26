export default <V, D>(value: V | undefined, defaultValue: D) => {
  if (value === undefined) {
    return defaultValue;
  }
  return value;
};
