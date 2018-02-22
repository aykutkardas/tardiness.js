/* 
	"tardiness.js"
    Author: Aykut Kardaş
    Github: github.com/aykutkardas
*/

var tardiness = tardiness || {};

tardiness.mach = function(way, message, key){
    var tempMessage = "",
        arrKey = [],
        keyLength = key.length,
        arrKeyIndex = 0,
        messageLength = message.length,
        charCode,
        i = 0, 
        j = 0;


        for (j; j < keyLength; j++)
            arrKey.push(key[j].charCodeAt());
            
        for (i; i < messageLength; i++) {

            charCode = message[i].charCodeAt();

            if(way == "crypto")
                charCode = charCode + arrKey[arrKeyIndex];
            else if(way == "decrypto")
                charCode = charCode - arrKey[arrKeyIndex];

            tempMessage += String.fromCharCode(charCode);

            if(arrKeyIndex === arrKey.length -1)
                arrKeyIndex = 0;
            else
                arrKeyIndex++;

        }

        return tempMessage;

}

tardiness.crypto = function (message, key) {
    return this.mach('crypto', message, key);
}

tardiness.decrypto = function (message, key) {
    return this.mach('decrypto', message, key);
}
