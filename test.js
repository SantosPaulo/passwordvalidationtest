const test = require('ava');

const regex = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[:;,_<>{}!@#\$%\^&\*\+\.\(\)\-\?\~\|\/\"\'\`\\]\\[])|(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[:;,_<>{}!@#\$%\^&\*\+\.\(\)\-\?\~\|\/\"\'\`\\]\\[])|(?=.*[A-Z])(?=.*[:;,_<>{}!@#\$%\^&\*\+\.\(\)\-\?\~\|\/\"\'\`\\]\\[]))(?=.{8,})");

// positive cases
test('Password 1: ', t => t.true(regex.test('p10rwP987987%&/')));
test('Password 2: ', t => t.true(regex.test('pauloSantos123')));
test('Password 3: ', t => t.true(regex.test('pauloSantos&')));
test('Password 4: ', t => t.true(regex.test('123123123Mm')));


// negative cases
test('Password 5: ', t => t.false(regex.test('password123')));
test('Password 6: ', t => t.false(regex.test('secret')));
test('Password 7: ', t => t.false(regex.test('qwerty22')));
test('Password 8: ', t => t.false(regex.test('freddie%&/')));
test('Password 9: ', t => t.false(regex.test('<password>')));
