import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
export const test = (req,res)=>{
    res.json({
        message: 'Test Route',
    });
};
export const updateUser = async (req, res, next) => {
    // console.log("update User calling began")
    if (req.user.id !== req.params.id){

        return next(errorHandler(401, 'You can only update your own account!'));
    }
    // console.log("user id verified")
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
      console.log("going to call update user function")
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
    //   console.log("update user ran successfully")
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
      console.log(error)
    }
  };