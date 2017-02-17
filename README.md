# pgp-encrypt-content
A library to encrypt your message given a public pgp key. Useful in things
like client-side contact forms when you would like to make sure emails sent over
are encrypted. Uses an openpgp standard to encrypt 🔐

# usage

```js
var PgpContent = require('pgp-encrypt-content')

var pgpContent = PgpContent({
  contents: 'i cant quit you babbyyy',
  pgpKey: '-----BEGIN PGP PUBLIC KEY BLO'
})

pgpContent.send(function (err, val) {
  if (err) console.log(err)
  console.log(val)
})
```

## pgpContent = PgpContent(opts)
Create an instance of pgp-encrypt-content. Takes in an opts object with the following keys:
- __opts.contents__: a string or an array of values you would like to encrypt
- __opts.pgpKey__: a public pgp key string 

## pgpContent.send()
This returns an encrypted string to be used in your application. pgp-encrypt-content will
import from an armored pgp key you provided and encrypt your message. 

# related content
- [kbpgp](https://github.com/keybase/kbpgp)
- [openpgp](ihttp://openpgp.org/)

# install
Install with npm:

```
npm install concrypt
```
