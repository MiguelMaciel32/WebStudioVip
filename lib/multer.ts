// lib/multer.ts
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Diretório para onde os arquivos serão enviados
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Desativa o bodyParser para que o multer possa processar o corpo da requisição
  },
};

export default upload;
