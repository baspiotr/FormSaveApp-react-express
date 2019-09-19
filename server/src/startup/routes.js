import express from 'express';
import error from '../middleware/error';

import { guestFormsRoute } from '../routes/guestForms';

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/v1/guest-forms', guestFormsRoute);
    app.use(error);
};
