const myFunction1 = require('./function_script')

const input = "test";

test(`Set input to uppercase`, () => {
    expect(myFunction1(input)).toBe('TEST')
})