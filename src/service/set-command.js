import setTypeMistakes from './set-type-mistakes';

export default function setCommand(countMistakes, location) {
  const { delCount, moveCount, addCount } = setTypeMistakes(
    countMistakes,
    null,
  );

  return `Mc:${countMistakes},dc:${delCount},mc:${moveCount},ac:${addCount}|l:${location}`;
}
