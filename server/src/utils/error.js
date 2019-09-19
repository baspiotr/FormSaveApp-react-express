import serializeError from 'serialize-error';

const getErrorMessage = error => {
    return error.message || serializeError(error);
};

export default getErrorMessage;
