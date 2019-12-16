import multer from 'multer';
import os from 'os';

const IMAGE_DIR = os.tmpdir();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, IMAGE_DIR);
  },
  filename: (req, file, cb) => {
    const timestamp = Math.floor(Date.now());
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, timestamp.toString().concat(fileName));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { // 'image/webp' | 'image/png' | 'image/jpeg'
    if (['image/webp', 'image/png', 'image/jpeg'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .webp and .jpeg formats are allowed!'), false);
    }
  }
});

export default upload;
