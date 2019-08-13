import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
    constructor() {
        const { host, port, secure, auth } = mailConfig;

        // como o nodemiler chamar um conexao para um serviço externo para envio de email
        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null,
        });
    }

    /**
     * Responsável por fazer o envio de email
     */
    sendMail(message) {
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message,
        });
    }
}

export default new Mail();
