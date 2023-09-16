/**
 * Generates an object containing elevation styles.
 *
 * @param {Object} levels - An object mapping elevation level names to their keys.
 * @param {Object} shadow - An object containing box-shadow styles for each elevation level.
 * @returns {Object} An object containing the elevation styles.
 */

function generateElevations(levels, shadow) {
  // Extract the elevation level names from the 'levels' object
  const elevationLevels = Object.values(levels);

  // Create an array of key-value pairs, where each key is an elevation level
  // and each value is the corresponding box-shadow style
  const entries = elevationLevels.map(level => {
    return [level, shadow[level]];
  });
  // Convert the array of key-value pairs into an object and return it
  return Object.fromEntries(entries);
}

// Export the generateElevations function for use in other modules.
export { generateElevations };
