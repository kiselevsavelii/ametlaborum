function updateInterval(xv, i, interval) {
  // Check if the array xv has enough elements
  if (!Array.isArray(xv) || xv.length <= i) {
    throw new Error("Invalid input: xv must be an array with length greater than i");
  }

  // Validate that interval is a number
  if (typeof interval !== 'number') {
    throw new Error("Invalid input: interval must be a number");
  }

  // Update the value at index i in the xv array
  xv[i] = interval;

  // Return the updated array
  return xv;
}
