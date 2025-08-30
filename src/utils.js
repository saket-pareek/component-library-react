/**
 * Returns a new array with duplicates removed based on a specified object key.
 *
 * @param {Array<object>} array - The array of objects to filter.
 * @param {String} key - The object key to use for determining duplicates.
 * @returns {Array<object>} - a new array with unique objects based on the key.
 */

const filterDuplicateKey = (array, key) => {
  if (!Array.isArray(array))
    throw new TypeError('Expected first argument to be an array');

  if (typeof key !== 'string')
    throw new TypeError('Expected second argument to be a string');

  return array.filter(
    (item, i, arr) => i === arr.findIndex(el => el[key] === item[key]),
  );
};

const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('response not ok!');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const calculateArrAverage = arr => {
  const arrSum = arr.reduce((acc, curr) => acc + +curr, 0);
  return +arrSum / arr.length;
};

const getLocalStorage = keyName => JSON.parse(localStorage.getItem(keyName));

const setLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, JSON.stringify(value));

export {
  filterDuplicateKey,
  fetchData,
  calculateArrAverage,
  getLocalStorage,
  setLocalStorage,
};
