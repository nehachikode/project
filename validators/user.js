const form = require('express-form');
const field = form.field;

module.exports = {
    login: form(
        field("name").required(),
        field("password").required()
    ),
    reg: form(
        //same for reg fields
    ),
};