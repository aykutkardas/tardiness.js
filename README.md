# tardiness.js
#### Simple and easy encryption.

##### Usage

```js
  tardiness.crypto(message, key);
  
  tardiness.decrypto(message, key);
```

##### Example

```js
  tardiness.crypto("Hello world!", "tea");
  // Output: "¼ÊÍàÔëÔÓàÉ"
  
  tardiness.decrypto("¼ÊÍàÔëÔÓàÉ", "tea");
  // Output: "Hello world!"
```
