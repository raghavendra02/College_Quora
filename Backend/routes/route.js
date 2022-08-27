const express = require('express');
const router = express.Router()
const signupTemplate = require('../models/signupModels.js'); // importing the schema for signup data
const questinsTemplate = require('../models/questionModels.js'); // importing the schema for signup data

// 1. Register
// DONE
router.post('/signup', async (req, res) => {
    // console.log(req.body); // check
    const { email, username } = req.body;

    const emailUniqueCheck = await signupTemplate.findOne({ email: email })
    const usernameUniqueCheck = await signupTemplate.findOne({ username: username })
    var proceedFlag = 1;
    if (emailUniqueCheck) {
        return res.json({ error: 'Email already exists', __v: 222 });
        proceedFlag = 0;
    }
    if (usernameUniqueCheck) {
        return res.json({ error: 'Username already exists', __v: 333})
        proceedFlag = 0;
    }
    if (proceedFlag) {
        // we are creating an instance of schema to store data from the request body
        const newUser = new signupTemplate({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            // Date is default and gets created added autmatically
        })

        newUser.save() // here save is a promise with which we save the 'newUser' to our database
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

// 2. signin
// DONE
router.post('/signin', async (req, res) => {
    console.log('req.body: ', req.body); // check
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            // console.log('User Details missing')
            return res.json({ error: 'Please fill the required data', serverValidation: 444 })
        }

        const userSigninData = await signupTemplate.findOne({ email: email, password: password })

        console.log(userSigninData);

        if (!userSigninData) {
            res.json({ error: 'Invalid Credentials', serverValidation: 0 })
        }
        else {
            res.json({ message: 'User Signed in Successfully', serverValidation: 1, userSigninData })
        }
    }
    catch (err) {
        console.log('catch error: ', err);
    }

})

// 3. asking questions
// DONE
router.post('/questions', async (req, res) => {
    console.log('req.body: ', req.body); // check
    try {
        const { question, asker } = req.body;

        if (!question || !asker) {
            // console.log('Question Details missing')
            return res.json({ error: 'Please fill all required data', serverValidation: 0 })
        }

        const newQuestion = new questinsTemplate({
            question: req.body.question,
            asker: req.body.asker,
            answers: [],
            // Date is default and gets created added autmatically
        })

        console.log(newQuestion);

        newQuestion.save() // here save is a promise with which we save the 'newUser' to our database
            .then((data) => {
                res.json(data);
                console.log(data)
            })
            .catch((err) => {
                res.json(err)
                console.log(err);
            })
    }
    catch (err) {
        console.log('catch error: ', err);
    }

})

// 4. displaying questions and answers
// DONE
router.route('/questionquery').get((req, res) => {
    questinsTemplate.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// 5. appending answers
// DONE
router.route('/addans').put((req, res, next) => {
    // questinsTemplate.update(
    //     { _id: person._id }, 
    //     { $push: { friends: friend } },
    //     done
    // );
    console.log('id: '+ req.body.id);
    console.log('body: ',req.body);
    const {id, answerer, answer} = req.body;
    questinsTemplate.findByIdAndUpdate(req.body.id,
        {
            $push: { answers: {answerer, answer, id}}
        }, (error, data) => {
            if (error) {
                return next(error);
                console.log(error)
            } else {
                res.json(data)
                console.log('Answer added successfully !')
            }
        })
})


module.exports = router // exporting router to server.js
