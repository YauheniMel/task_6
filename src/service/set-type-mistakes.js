const fakeNum = 93287327214641;

export default function setTypeMistakes(countMistakes) {
  let delCount = 0;
  let moveCount = 0;
  let addCount = 0;

  const arr = [
    ['dc', 'mc', 'ac'],
    ['mc', 'dc', 'ac'],
    ['ac', 'mc', 'dc'],
  ];
  let m = 0;

  for (let i = 0; i < countMistakes; i += 1) {
    const pos = (i / fakeNum)
      .toString()
      .split('')
      .filter((item) => +item)[m];

    if (arr[m][pos] === 'dc') {
      delCount += 1;
      m = 2;
    } else if (arr[m][pos] === 'mc') {
      moveCount += 1;
      m = 0;
    } else {
      addCount += 1;
      m = 1;
    }
  }

  return {
    delCount,
    moveCount,
    addCount,
  };
}
