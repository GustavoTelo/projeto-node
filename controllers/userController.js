const { registerUserService, loginUserService } = require('../service/userService');

const registerUserController = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await registerUserService(username, password);
        return res.status(200).json({ message: 'User registered successfully', user: user})
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const loginUserController = async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await loginUserService(username, password);
        return res.status(200).json({message: 'User logged in successfully', user: user})
    } catch (err) {
        return res.status(500).json({error: err.message});
    };
};

module.exports = {
    registerUserController,
    loginUserController
}