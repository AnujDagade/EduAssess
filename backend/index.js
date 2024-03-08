import app from './app.js'
import chalk from 'chalk'


const PORT = process.env.PORT || 8080
app.listen(PORT,(err)=>{
    if(err) {
        console.error(err)
    } else {
        console.log(chalk.green(`Server running on port ${PORT}`));
    }
})