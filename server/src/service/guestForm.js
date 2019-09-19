import { GuestForm, validateGuestForm } from '../models/guestForm';

const create = async function(body) {
    const { error } = validateGuestForm(body);
    if (error) throw new Error(error.details[0].message.toString());

    return new GuestForm(body).save();
};

export const GuestFormService = { create };
