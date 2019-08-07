import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    // storage é como o multer vai guardar os arquivos de imagem, diskstorage permite o armazenamento dentro dos arquivos da aplicação
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename:(req, file, cb) => {
            // como vai formatar o nome de arquivo da imagem
            crypto.randomBytes(16, (err, res) => {
                if(err) return cb(err)

                return cb(null, res.toString('hex') + extname(file.originalname)) 
            })
        }, 
    })
};