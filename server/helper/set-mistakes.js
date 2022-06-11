module.exports.setMistakes = (item, add, del, move, location) => {
  const alphabetEn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    .split('')
    .sort((a, b) => {
      if (a.charCodeAt(0) % 2 !== 0) {
        return 1;
      }
      if (b.charCodeAt(0) % 2 !== 0) {
        return -1;
      }
      return 0;
    });

  const alphabetRu =
    'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
      .split('')
      .sort((a, b) => {
        if (a.charCodeAt(0) % 2 !== 0) {
          return 1;
        }
        if (b.charCodeAt(0) % 2 !== 0) {
          return -1;
        }
        return 0;
      });

  const alphabetDe =
    'AÄCDEFGHIJKLMNOÖPQRSẞTUÜVWXYZaäbcdefghiyklmnoöpqrsßtuüvwxyz'
      .split('')
      .sort((a, b) => {
        if (a.charCodeAt(0) % 2 !== 0) {
          return 1;
        }
        if (b.charCodeAt(0) % 2 !== 0) {
          return -1;
        }
        return 0;
      });
  let alphabet = [];
  if (location === 'en') {
    alphabet = alphabetEn;
  } else if (location === 'ru') {
    alphabet = alphabetRu;
  } else {
    alphabet = alphabetDe;
  }

  const arrCrypt = [
    8, 6, 4, 5, 2, 0, 9, 1, 3, 4, 5, 2, 0, 9, 1, 3, 4, 5, 2, 0, 9, 1, 3, 7, 6,
    4, 5, 2, 0, 9
  ];
  const id = item.id.repeat(140);
  let o = 1;
  for (let i = 0; i < add; i += 1) {
    let X = id[i].charCodeAt(0) - 45;
    if (o === 1) {
      // eslint-disable-next-line no-param-reassign
      const { code } = item.address;
      let str = '';

      while (arrCrypt.length <= X) {
        X -= arrCrypt.length;
      }

      if (X === 0) {
        str = `${arrCrypt[0]}${code.slice(1)}${code[0]}`;
      } else {
        str = `${code.slice(0, X)}${arrCrypt[X]}${code.slice(X)}`;
      }

      o = 2;
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          code: str
        }
      };
    } else if (o === 2) {
      const { city } = item.address;
      while (city.length <= X) {
        X -= city.length;
      }

      let str = '';

      if (X === 0) {
        str = `${alphabet[0]}${city.slice(1)}${city[0]}`;
      } else {
        str = `${city.slice(0, X)}${alphabet[X]}${city.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          city: str.trim()
        }
      };
      o = 3;
    } else if (o === 3) {
      const { address } = item.address;
      let str = '';
      while (address.length <= X) {
        X -= address.length;
      }

      if (X === 0) {
        str = `${alphabet[0]}${address.slice(1)}${alphabet[0]}`;
      } else {
        str = `${address.slice(0, X)}${alphabet[X]}${address.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          address: str.trim()
        }
      };

      o = 4;
    } else if (o === 4) {
      const { name } = item;
      let str = '';
      while (name.length <= X) {
        X -= name.length;
      }

      if (X === 0) {
        str = `${alphabet[0]}${name.slice(1)}${alphabet[0]}`;
      } else {
        str = `${name.slice(0, X)}${alphabet[X]}${name.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        name: str.trim()
      };

      o = 5;
    } else if (o === 5) {
      // eslint-disable-next-line no-param-reassign
      const { phone } = item;
      let str = '';

      while (arrCrypt.length <= X) {
        X -= arrCrypt.length;
      }

      if (X === 0) {
        str = `${arrCrypt[0]}${phone.slice(1)}${phone[0]}`;
      } else {
        str = `${phone.slice(0, X)}${arrCrypt[X]}${phone.slice(X)}`;
      }

      o = 1;
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        phone: str.trim()
      };
    }
  }

  let k = 1;

  for (let i = 0; i < del; i += 1) {
    let X = id[i].charCodeAt(0) - 45;

    if (k === 1) {
      const { code } = item.address;
      let str = '';

      while (code.length <= X) {
        X -= code.length;
      }

      if (X === 0) {
        str = `${code[0]}${code.slice(2)}`;
      } else {
        str = `${code.slice(0, X - 1)}${code.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          code: str.trim()
        }
      };

      k = 2;
    } else if (k === 2) {
      const { city } = item.address;
      let str = '';

      while (city.length <= X) {
        X -= city.length;
      }

      if (X === 0) {
        str = `${city[0]}${city.slice(2)}`;
      } else {
        str = `${city.slice(0, X - 1)}${city.slice(X)}`;
      }

      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          city: str.trim()
        }
      };

      k = 3;
    } else if (k === 3) {
      while (item.address.address.length <= X) {
        X -= item.address.address.length;
      }

      let str = '';
      const { address } = item.address;
      if (X === 0) {
        str = `${address[0]}${address.slice(2)}`;
      } else {
        str = `${address.slice(0, X - 1)}${address.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          address: str.trim()
        }
      };
      k = 4;
    } else if (k === 4) {
      while (item.name.length <= X) {
        X -= item.name.length;
      }

      let str = '';
      const { name } = item;
      if (X === 0) {
        str = `${name[0]}${name.slice(2)}`;
      } else {
        str = `${name.slice(0, X - 1)}${name.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        name: str.trim()
      };
      k = 5;
    } else if (k === 5) {
      const { phone } = item;
      let str = '';

      while (phone.length <= X) {
        X -= phone.length;
      }

      if (X === 0) {
        str = `${phone[0]}${phone.slice(2)}`;
      } else {
        str = `${phone.slice(0, X - 1)}${phone.slice(X)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        phone: str.trim()
      };

      k = 1;
    }
  }
  let l = 1;
  for (let i = 0; i < move; i += 1) {
    let X = id[i].charCodeAt(0) - 45;

    if (l === 1) {
      const { code } = item.address;
      let str = '';
      while (code.length <= X) {
        X -= code.length;
      }
      if (X === 0) {
        str = `${code[1]}${code[0]}${code.slice(2)}`;
      } else {
        str = `${code.slice(0, X - 1)}${code[X]}${code[X - 1]}${code.slice(
          X + 1
        )}`;
      }

      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          code: str.trim()
        }
      };

      l = 2;
    } else if (l === 2) {
      const { city } = item.address;
      let str = '';
      while (city.length <= X) {
        X -= city.length;
      }
      if (X === 0) {
        str = `${city[1]}${city[0]}${city.slice(2)}`;
      } else {
        str = `${city.slice(0, X - 1)}${city[X]}${city[X - 1]}${city.slice(
          X + 1
        )}`;
      }

      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          city: str.trim()
        }
      };

      l = 3;
    } else if (l === 3) {
      const { address } = item.address;

      while (address.length <= X) {
        X -= address.length;
      }

      let str = '';

      if (X === 0) {
        str = `${address[1]}${address[0]}${address.slice(2)}`;
      } else {
        str = `${address.slice(0, X - 1)}${address[X]}${
          address[X - 1]
        }${address.slice(X + 1)}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        address: {
          ...item.address,
          address: str.trim()
        }
      };

      l = 4;
    } else if (l === 4) {
      const { name } = item;

      while (name.length <= X) {
        X -= name.length;
      }

      let str = '';

      if (X === 0) {
        str = `${name[1]}${name[0]}${name.slice(2)}`;
      } else {
        str = `${name.slice(0, X - 1)}${name[X]}${name[X - 1]}${name.slice(
          X + 1
        )}`;
      }
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        name: str.trim()
      };

      l = 5;
    } else if (l === 5) {
      const { phone } = item;
      let str = '';
      while (phone.length <= X) {
        X -= phone.length;
      }
      if (X === 0) {
        str = `${phone[1]}${phone[0]}${phone.slice(2)}`;
      } else {
        str = `${phone.slice(0, X - 1)}${phone[X]}${phone[X - 1]}${phone.slice(
          X + 1
        )}`;
      }

      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        phone: str.trim()
      };

      l = 1;
    }
  }

  return item;
};
