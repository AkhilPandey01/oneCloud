import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import errorHandler from "../utils/error.js"

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    // Check if any required field is missing
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'Please fill in all fields'));
    }
     // Hash the password
     const hashedPassword = await bcryptjs.hash(password, 10);

     // Create a new user instance
     const newUser = new User({ username, email, password: hashedPassword });

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
