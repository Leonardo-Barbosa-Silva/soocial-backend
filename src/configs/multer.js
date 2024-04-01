import multer from 'multer';

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/assets")
    },
    filename: function (req, file, cb) {
        const time = new Date().getTime()

        cb(null, `${time}_${file.originalname}`)
    }
})

const multerUpload = multer({ storage: multerStorage })





export default multerUpload;