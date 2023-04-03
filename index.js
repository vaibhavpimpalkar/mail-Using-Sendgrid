let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
        user: 'vaibhavpimpalkar515@gmail.com',
        pass: 'mEX5r0xF2VwgAnS6'
    }
});

let mailOption = {
    from:'vaibhavpimpalkar515@gmail.com',
    to:'vaibhavpimpalkar28@gmail.com',
    subject:'Sending Email using NodeJs',
    text:'welcome to sendgrid'
}

transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log(`Email Sent: `+info.response);
    }
})