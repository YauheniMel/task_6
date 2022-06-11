const fakeNum = 93287327214641;

export default function setTypeMistakes(countMistakes) {
  let delCount = 0;
  let moveCount = 0;
  let addCount = 0;

  const arr = [
    ['dc', 'mc', 'ac', 'dc', 'mc', 'ac', 'dc', 'mc', 'ac', 'dc'],
    ['mc', 'dc', 'ac', 'mc', 'dc', 'ac', 'mc', 'dc', 'ac', 'mc'],
    ['ac', 'mc', 'dc', 'ac', 'mc', 'dc', 'ac', 'mc', 'dc', 'ac'],
  ];

  let m = 0;
  for (let i = 1; i <= countMistakes; i += 1) {
    const pos = (i / fakeNum)
      .toString()
      .split('')
      .filter((item) => +item)[m];

    if (arr[m][pos] === 'dc') {
      delCount += 1;
      m = 2;
      if (moveCount - addCount < 0) {
        moveCount += 1;
        addCount -= 1;
      } else {
        addCount += 1;
        moveCount -= 1;
      }
    } else if (arr[m][pos] === 'mc') {
      moveCount += 1;
      m = 0;
      if (delCount - addCount < 0) {
        delCount += 1;
        addCount -= 1;
      } else {
        addCount += 1;
        delCount -= 1;
      }
    } else if (arr[m][pos] === 'ac') {
      addCount += 1;
      m = 1;
      if (delCount - moveCount < 0) {
        delCount += 1;
        moveCount -= 1;
      } else {
        moveCount += 1;
        delCount -= 1;
      }
    }
  }

  return {
    delCount,
    moveCount,
    addCount,
  };
}
