import mongoose from 'mongoose';
import Joi from 'joi';

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
    const schema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
            .email()
            .required(),
        eventDate: Joi.date().required(),
    };

    return Joi.validate(body, schema);
};

const GuestForm = mongoose.model('guest_form', guestFormSchema);

export { GuestForm, validateGuestForm };
