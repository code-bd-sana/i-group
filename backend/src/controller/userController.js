import bcrypt from "bcrypt";
import User from "../model/UserModel.js";
import OTP from "../model/otpModel.js";
export const UserRegister = async (req, res) => {
    try {
        const data = req.body;
        const plainPassword = data.password;
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        data.password = hashedPassword;
        const user = new User(data);
        await user.save();
        res.status(201).json({ user, message: "User Registered Successfully" });


        
    } catch (error) {
        res.status(500).json({error, message: error.message });
    }
}


export const UserLogin = async (req, res) => {
    const data = req.body;
    const { email, password } = data;
    const isExist = await User.findOne({ email:email });
    if (!isExist) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, isExist.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect Password" });
    };
    return res.status(200).json({ message: "Login Successful", user: isExist });
};

export const userUpdate = async (req, res) => {

    try {
        const data = req.body;
        const userId = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true });
        return res.status(200).json({ message: "User Updated Successfully", user: updatedUser });
        
    } catch (error) {
        return res.status(500).json({error, message: error.message });
    }
};

export const changePassword = async(req, res) => {

    try {
            const { email, oldPassword, newPassword } = req.body;
            const isExist = await User.findOne({ email: email });
            if (!isExist) {
                return res.status(404).json({ message: "User not found" });
            }
            const isPasswordValid = await bcrypt.compare(oldPassword, isExist.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Incorrect Old Password" });
            }
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            const updated = await User.updateOne({ email: email }, { $set: { password: hashedNewPassword } });
            return res.status(200).json({ message: "Password Changed Successfully", data:updated });
        
        
    } catch (error) {
        res.status(500).json({ error, message: error.message });
    }
};

export const forgetPassword = async(req, res) => {
    try {
        const { email, newPassword, otp } = req.body;
        const isExist = await User.findOne({ email: email });
        if (!isExist) {
            return res.status(404).json({ message: "User not found" });
        };

        const otpExist = await OTP.findOne({email:email})
        if(!otpExist){
            return res.status(404).json({ message: "OTP not found or Expired" });
        };

        if(otpExist.otp !== otp){
            return res.status(400).json({ message: "Incorrect OTP" });
        };

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        const updated = await User.updateOne({ email: email }, { $set: { password: hashedNewPassword } });
        await OTP.deleteOne({email:email});
        return res.status(200).json({ message: "Password Reset Successfully", data:updated });
        

        
    } catch (error) {
        res.status(500).json({ error, message: error.message });
    }
}