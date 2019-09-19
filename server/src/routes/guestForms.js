import express from 'express';
import { GuestFormService } from '../service/guestForm';
import getErrorMessage from '../utils/error';

const router = express.Router();

router.post('/', async function(req, res) {
    try {
        await GuestFormService.create(req.body);
        res.status(201).send({ success: true });
    } catch (error) {
        res.status(400).send({ success: false, error: getErrorMessage(error) });
    }
});

export { router as guestFormsRoute };
