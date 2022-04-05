const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')

1
const saltRounds = 10
// register for signup 


router.post('/register', (req, res, next) => {
    const { email, password, username } = req.body;
    console.log(req.body)
    // Check if email or password or name are provided as empty string 
    if (email === '' || password === '' || username === '') {
        res.status(400).json({ message: "Provide email, password and name" });
        return;
    }
    // Use regex to validate the email format
    const emailValid = email.includes('@')
    if (!emailValid) {
        res.status(400).json({ message: 'Provide a valid email address.' });
        return;
    }

    // Use regex to validate the password format
    if (password.length < 6) {
        res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
        return;
    }

    // Check the users collection if a user with the same email already exists
    User.findOne({ email })
        .then((foundUser) => {
            // If the user with the same email already exists, send an error response
            if (foundUser) {
                res.status(400).json({ message: "User already exists." });
                return;
            }

            // If email is unique, proceed to hash the password
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            // Create the new user in the database
            // We return a pending promise, which allows us to chain another `then` 
            return User.create({ email, password: hashedPassword, username });
        })
        .then((createdUser) => {
            // Deconstruct the newly created user object to omit the password
            //  never expose passwords publicly
            const { email, username, _id } = createdUser;

            // Create a new object that doesn't expose the password
            const user = { email, username, _id };

            // Send a json response containing the user object
            res.status(201).json({ user: user });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" })
        });
});

// new login route 

router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    console.log(req.body)
    // check if email , password or name are provided as empty string 

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password" });
        return;
    }

    User.findOne({ email })
        .then(foundUser => {
            if (!foundUser) {
                res.status(400).json({ message: 'User not found' });
                return;
            }

            const passwordCorrect = bcrypt.compareSync(password, foundUser.password)

            if (passwordCorrect) {
                const { _id, email, name } = foundUser
                const payload = { _id, email, name }

                // create JWT

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: '48h' }
                )
                res.status(200).json({ authToken: authToken })

            }
            else {
				res.status(401).json({ message: "Unable to authenticate user" });
            }
        })

})

module.exports = router;