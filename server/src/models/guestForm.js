import mongoose from 'mongoose';
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const guestFormSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    eventDate: {
        type: Date,
    },
});

const validateGuestForm = function(body) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
            .email()
            .required(),
        eventDate: Joi.date()
            .format('YYYY-MM-DD')
            .utc(),
    });

    return schema.validate(body);
};

const GuestForm = mongoose.model('guest_form', guestFormSchema);

export { GuestForm, validateGuestForm };
