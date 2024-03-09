import multer from 'multer';
import path from 'path'

const uploadedFile = multer({
    dest: path.join('tmp_files')
})

export {uploadedFile};