const assert = require('assert');
const funcs = require('./index');
const functions = require('firebase-functions'); 

describe('helloWorldHandler', function () {
    it('should return "HelloWorld" when context.auth is not null', function() {
        assert.equal(funcs.helloWorldHandler(null, { auth: {} }), "Hello World!");
    });
    it('should raise an exception when context.auth is null', function () {
        try {
            funcs.helloWorldHandler(null, { auth: null })
        } catch (e) {
            assert.equal(e.constructor, functions.https.HttpsError)
        }
    });
});
