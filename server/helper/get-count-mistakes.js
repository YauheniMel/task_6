function getSubstring(command, pattern) {
  const subStr = command.match(pattern);
  if (subStr) {
    return +subStr[0].slice(3);
  }

  return 0;
}

module.exports.getCountMistakes = (command) => {
  // eslint-disable-next-line prefer-regex-literals
  const moveRegExp = new RegExp('mc:[0-9]{1,3}');

  const moveCount = getSubstring(command, moveRegExp);
  // eslint-disable-next-line prefer-regex-literals
  const delRegExp = new RegExp('dc:[0-9]{1,3}');

  const delCount = getSubstring(command, delRegExp);
  // eslint-disable-next-line prefer-regex-literals
  const addRegExp = new RegExp('ac:[0-9]{1,3}');
  const addCount = getSubstring(command, addRegExp);

  return {
    moveCount,
    delCount,
    addCount
  };
};
