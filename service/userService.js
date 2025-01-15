const User = require('../models/User');

const registerUserService = async (username, password) => {
    if (!username || !password) throw new Error('Username and password is required');

    const userExists = await User.findOne( {where: { username }} );
    if (userExists) throw new Error('Username already exists');

    const user = User.create({ username, password });
    if (!user) throw new Error('user not created');

    return user;
};




module.exports = {
    registerUserService,
};
