const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
    let jow;

    beforeEach((done) => {
        joe = new User({ name:'joe' });
        joe.save()
            .then(() => done())
    });

    it('Instance type using set and save', (done) => {
        
    });
});