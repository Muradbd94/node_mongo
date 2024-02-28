import User from '../model/User.js';


export const register = (req, res) => {
    const username ='Murad1';
    const useremail ='murad1@wtl.com';
    const password = 'wtl21';

    const newUser = new User({username, useremail, password});
    newUser.save()

    return res.status(201).json({message: 'User created'});
}

export const getUser = (req, res) => {
    User.find({})
        .then(users => {
            res.status(200).json({ users });
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching users.' });
        });
}



