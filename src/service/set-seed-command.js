import setTypeMistakes from './set-type-mistakes';

const fakeNum = 93287327214641;

export default function setSeedCommand(number) {
  let location = '';

  const a = (number / fakeNum)
    .toString()
    .split('')
    .filter((item) => +item);

  const oneNumbers = a.filter((item) => +item === 4);
  const twoNumbers = a.filter((item) => +item === 9);
  const threeNumbers = a.filter((item) => +item === 7);

  const maxLength = Math.max(
    +oneNumbers.length,
    +twoNumbers.length,
    +threeNumbers.length,
  );

  if (oneNumbers[maxLength - 1]) {
    location = 'ru';
  } else if (twoNumbers[maxLength - 1]) {
    location = 'en';
  } else {
    location = 'de';
  }

  const arr = [
    [0, 1],
    [9, 4, 5, 7, 2, 1, 8, 6, 0, 3],
    [5, 3, 7, 8, 4, 0, 6, 9, 1, 2],
    [0, 2, 5, 3, 1, 7, 6, 8, 9, 4],
  ];

  let countMistakes = +`${arr[0][a[3]] ? arr[0][a[3]] : 0}${arr[1][a[5]]}${
    arr[2][a[8]]
  }${arr[3][a[9]]}`;

  if (countMistakes > 1000) {
    countMistakes -= 1000;
  }

  const { delCount, moveCount, addCount } = setTypeMistakes(
    countMistakes,
    null,
  );

  return `Mc:${countMistakes},dc:${delCount},mc:${moveCount},ac:${addCount}|l:${location}`;
}
