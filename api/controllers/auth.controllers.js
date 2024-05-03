import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import errorHandler from "../utils/error.js"
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    // Check if any required field is missing
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'Please fill in all fields'));
    }
     // Hash the password
     const hashedPassword = await bcryptjs.hash(password, 10);

     // Create a new user instance
     const newUser = new User({email, password: hashedPassword });

    try {
        // Save the new user to the database
        await newUser.save();
        // Return success message
        res.json({ message: 'User created' });
    } catch (error) {
        // If saving the user fails (e.g., user already exists), return an error message
        next(error);
    }
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'Please fill in all fields'));
    }
    try {
        // Find user in the database
        const validuser = await User.findOne({ email });
        if (!validuser) {
            return next(errorHandler(404, 'User not found'));
        }

        // Check if user exists before comparing password
        if (!validuser.password) {
            return next(errorHandler(400, 'User password not found'));
        }

        const validPassword = await bcryptjs.compare(password, validuser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }
        
        const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
        const { password:pass, ...rest} = validuser._doc;


        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error);
    }
};
