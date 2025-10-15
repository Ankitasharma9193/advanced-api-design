import User from "../models/userSchema.js";
import bcrypt from 'bcryptjs'; // for password hashing

const createUser = async(req, res) => {
    try{
        const { name, email, password, role } = req.body;

         // Validate required fields
        if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
        }
        
         // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
      
        // Save the user to the database
        await newUser.save();
        
        // Do not return password
        const { password: _, ...userData } = newUser.toObject();
        res.status(200).json({
           message: 'users created successfully....',
           status: 'success'
        });

    } catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await User.find().select('-password'); // Exclude passwords
        res.status(200).json({
           message: 'users retrieved successfully....',
           status: 'success',
           result: users
        });

    } catch(error){
        console.error(error);
        res.status(500).json({ 
          message: 'Server error',
          status: 'failed',
        });
    }
}

const getUserById = (req, res) => {
  res.status(200).json({ message: 'User retrieved successfully' });
}

const updateUser = (req, res) => {
  res.status(200).json({ message: 'User updated successfully' });
}

const deleteUser = (req, res) => {
  res.status(200).json({ message: 'User deleted successfully' });
}

export { createUser, getUsers, getUserById, updateUser, deleteUser };