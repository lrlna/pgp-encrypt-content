var assert = require('assert')
var pgp = require('kbpgp')

module.exports = pgpContent

function pgpContent (opts) {
  var contents = opts.contents
  var pgpKey = opts.pgpKey

  assert.ok(typeof contents === 'string' || typeof contents === 'object', 'concrypt: contents should be type String or type Object')
  assert.equal(typeof pgpKey, 'string', 'concrypt: pgpKey should be type String')

  if (Array.isArray(contents)) contents.join('\n')

  return { send: send }

  function send (cb) {
    var armored = { armored: pgpKey }
    return _encrypt(armored, cb)
  }

  function _encrypt (armored, cb) {
    assert.equal(typeof armored, 'object', 'concrypt.encrypt: armored should be type Object')

    pgp.KeyManager.import_from_armored_pgp(armored, function (err, user) {
      if (err) return cb(err)
      var params = {
        msg: contents,
        encrypt_for: user
      }
      secret(params, cb)
    })

    function secret (params, cb) {
      pgp.box(params, function (err, val) {
        if (err) return cb(err)
        cb(null, val)
      })
    }
  }
}
