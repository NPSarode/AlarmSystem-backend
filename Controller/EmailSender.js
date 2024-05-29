import { createTransport } from "nodemailer"

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    auth: {
        user: 'nikhil.sarode@kneoautomation.com',
        pass: 'Nikhil@123'
    }
})

export const sendEmail = async (email) => {
    await transporter.sendMail({
        from: 'nikhil.sarode@kneoautomation.com',
        to: 'nikhil.sarode@kneoautomation.com',
        subject: "Alarm Generated",
        html:`<p>This is a system generated email. Kindly do not reply.</p>`
    }).then(data => {console.log(data)}).catch((err) => {console.log(err)})
}