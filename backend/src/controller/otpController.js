import OTP from "../model/otpModel.js";
import nodemailer from "nodemailer";

export const sendOtp = async (req, res) => {
  try {
    const otpGenarated = Math.floor(100000 + Math.random() * 900000);
    const { email } = req.body;

    const deltedAllPreviousOtp = await OTP.deleteMany({ email: email });
    

    // Save OTP in DB
    const otpEntry = new OTP({ email, otp: otpGenarated.toString() });
    await otpEntry.save();

    // Nodemailer Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "bannah76769@gmail.com",
        pass: "noqq kzxv olzf clzz",
      },
    });

    // HTML Email Template (Matching your Dashboard Theme)
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background: #F8FAFC; padding: 20px;">
        
        <div style="max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 10px; border: 1px solid #E2E8F0;">
          
          <h2 style="text-align: center; color: #2563EB; margin-bottom: 10px;">
            I-GROUP Verification
          </h2>

          <p style="font-size: 15px; color: #475569; text-align: center;">
            Use the verification code below to complete your login.
          </p>

          <div style="text-align: center; margin: 25px 0;">
            <span style="display: inline-block; font-size: 32px; font-weight: bold; color: #1E293B; background: #F1F6FF; padding: 12px 25px; border-radius: 10px; border-left: 4px solid #2199E8;">
              ${otpGenarated}
            </span>
          </div>

          <p style="font-size: 14px; color: #64748B; text-align: center;">
            This code will expire in <strong>5 minutes</strong>.  
          </p>

          <hr style="margin: 25px 0; border: none; border-bottom: 1px solid #E2E8F0;" />

          <p style="font-size: 13px; text-align: center; color: #94A3B8;">
            If you didn’t request this code, please ignore this email.
          </p>
        </div>

      </div>
    `;

    // Send the email
    const mailOptions = {
      from: `"I-GROUP" <bannah76769@gmail.com>`,
      to: email,
      subject: "Your I-GROUP Verification Code",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP Sent Successfully", otp: otpGenarated });
  } catch (error) {
    res.status(500).json({ error, message: error.message });
  }
};
