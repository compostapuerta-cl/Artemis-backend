const mongoose = require('mongoose')

process.env.PORT=process.env.PORT || 3000
process.env.MONGO_URL= 'mongodb+srv://Mauricio:1234@artemis2.cqjms.mongodb.net/Artemis2?retryWrites=true&w=majority'
process.env.NODE_ENV=process.env.NODE_ENV || 'dev'

process.env.SEED='dev-seed'
process.env.EXPIRATION_TOKEN=1000*60*60*24*30

process.env.GOOGLE_CLIENT_ID='12773282290-heah8rpv61jhoppeetnodg0rnqhufupt.apps.googleusercontent.com'

if(process.env.NODE_ENV==='dev'){
    process.env.HTTPONLY=true
    process.env.SECURE=''
}
else{
    process.env.HTTPONLY=''
    process.env.SECURE=true
}

mongoose.set('useFindAndModify', false)

mongoose.connect(process.env.MONGO_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
},(err,res)=>{
    if(err) throw err
    console.log("Database online")
})