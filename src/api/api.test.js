const {getGuests, removeGuest} = require('./api');

describe('API', ()=> {
    it('Testing getGuests() function.', ()=> {
        expect.assertions(1);
        getGuests().then(result => {
            expect(typeof result[0][0].name).toBe('string');
        });
    })

    
})