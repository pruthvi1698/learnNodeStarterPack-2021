// npm i nodemailer

var nodeMailer =  require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireSSL: true,
    auth: {
        user: 'pruthvikumar1698@gmail.com',
        pass: 'xxxxxxxxxxxx'
    }
}),
mailOptions = {
    from:'pruthvikumar1698@gmail.com',
    to:'pruthvikumar111@gmail.com',
    subject:'Test Node Mail',
    text:'Hi Pruthvi Sugb. My channel'
}

transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn('email sent successfully',info.response);
    }
})