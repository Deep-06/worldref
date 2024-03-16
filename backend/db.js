const mongoose=require('mongoose');


const connection = () =>{
    mongoose
    .connect(process.env.MONGO_URL, {
       dbName: "Worldref",
    })
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(`error while connecting ${err}`)
    })
}


module.exports={
    connection
}