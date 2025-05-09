const nodemailer= require('nodemailer');
const path = require('path');

const transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'iagolopezro@gmail.com',
        pass: 'hmyu phex olsy upto'
    }
});

const mailOpciones= {
    from: 'iagolopezro@gmail.com',
    to: 'iagolopezroman10@gmail.com',
    subject: 'Trabajo NodeMailer',
    text:'Mañana gana el barca 1-3',
    //EXTRA. Añadir imagenes y archivos en el correo
    attachments: [
        {
            filename: 'ejemplo.txt', 
            path: path.join(__dirname, 'archivos', 'ejemplo.txt') 
        },
        {
            filename: 'imagen.jpg',
            path: path.join(__dirname, 'imagenes', 'imagen.jpg')
        }
    ]
};

//Enviamos el correo
transporter.sendMail(mailOpciones, (error, info) => {
    if (error){
        return console.log('Error al enviar', error);
    }
    else{
        console.log('Correo enviado:', info.response);
    }    
});

