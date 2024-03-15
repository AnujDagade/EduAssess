import multer from 'multer';
import path from 'path'

// const uploadedFile = multer({
//     dest: path.join('tmp_files')
// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('tmp_files'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})

const uploadedFile = multer({storage})

export {uploadedFile};