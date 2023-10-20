const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/employees-test', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('error: ', err))
