# FormSaveApp-react-express

Start tutorial:

server:
1. cd server
2. yarn install
3. edit config.js for customize mongo url
4. yarn prestart
5. yarn dev

6*. yarn test

client:
1. cd client
2. yarn install
3. yarn start

4*. yarn test

Description:

Express app with prettier, eslint & babel for ES2017 support. 
After yarn dev command babel will tranpile app to \dist folder and run it. 

client and server folders contain config.js file for setup url's

Task requirement:

The frontend should be written in React (using Redux will be very appreciated)

Ad1. Frontend app in client folder is made in React with Redux, Redux Thunk, Formik,yup, Styled-Components, react-datepicker

Data from form should be saved in DB (we suggest MongoDB)

Ad2. Backend in server folder use mongoDB via Mongoose.js

Data from form should be validated before saving.

Ad3. Forms data are validated twice. First in React app by Yup. Second time in Express by Joi. 

Errors should be handled and displayed for the user

Ad4. Errors are presented to the user in React app.

The app must be tested (It's your decision what kind of tests are necessary, please remember that this part of the task is very important to us).

Ad5. Tests: client use jest snapshot tests, server contain custom integration tests in test/integration folder
