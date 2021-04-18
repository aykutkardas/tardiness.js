var tardiness = {
  mach: function (msg, key, isDecrypt) {
    var tempMsg = "",
      arrKey = [],
      arrIdx = 0,
      charCode;

    for (var i = 0; i < key.length; i++) {
      arrKey.push(key[i].charCodeAt());
    }

    for (var i = 0; i < msg.length; i++) {
      charCode = msg[i].charCodeAt();

      if (isDecrypt) {
        charCode = charCode - arrKey[arrIdx];
      } else {
        charCode = charCode + arrKey[arrIdx];
      }

      tempMsg += String.fromCharCode(charCode);

      if (arrIdx === arrKey.length - 1) {
        arrIdx = 0;
      } else {
        arrIdx++;
      }
    }

    return tempMsg;
  },
  crypto: function (msg, key) {
    return this.mach(msg, key);
  },
  decrypto: function (msg, key) {
    return this.mach(msg, key, true);
  },
};
