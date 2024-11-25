import nodeMailer from "nodemailer"

const sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth:{
            host: "smtp.gmail.com",
            port: 465,
            user: "yasirirshad208@gmail.com",
            pass: "ozrghbgdhynxmumg"
        }
    });

    const mailOptions = {
        from: "yasirirshad208@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(mailOptions);
}

export default sendEmail;