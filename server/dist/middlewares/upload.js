"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const os_1 = __importDefault(require("os"));
const IMAGE_DIR = os_1.default.tmpdir();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, IMAGE_DIR);
    },
    filename: (req, file, cb) => {
        const timestamp = Math.floor(Date.now());
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, timestamp.toString().concat(fileName));
    }
});
const upload = multer_1.default({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (['image/webp', 'image/png', 'image/jpeg'].includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Only .png, .webp and .jpeg formats are allowed!'), false);
        }
    }
});
exports.default = upload;
//# sourceMappingURL=upload.js.map