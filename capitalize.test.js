const capitalize = require('./capitalize');

it('First letter capitalized', () => {
    expect(capitalize('first')).toBe('First');
});