# tardiness.js

Simple and easy encryption. Less than **1 kb**.

> This is just a challenge project. Its use is not recommended.

## Usage

```js
  tardiness.crypto(message, key);
  
  tardiness.decrypto(message, key);
```

## Sample

```js
  tardiness.crypto("Hello world!", "tea");
  // Output: "¼ÊÍàÔ\u0081ëÔÓàÉ\u0082"
  
  tardiness.decrypto("¼ÊÍàÔ\u0081ëÔÓàÉ\u0082", "tea");
  // Output: "Hello world!"
```
