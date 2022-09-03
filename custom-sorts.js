function ageSort(users) {
  users.sort((a, b) => a.age - b.age);
  return users;
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  });
  return arr
}

function validAnagrams(s, t) {
  let sortedS = s.split('').sort()
    , sortedT = t.split('').sort();
  return sortedS.every((el, index) => el === sortedT[index]);

}

function reverseBaseSort(arr) {
  arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });
  return arr
}

function frequencySort(arr) {
  let frequencyMap = new Object();
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  };
  return arr.sort((a, b) => frequencyMap[a] - frequencyMap[b] || b - a);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];