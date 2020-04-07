var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser:true , useUnifiedTopology: true },
    
    (err) => {
    if (!err) {console.log('MongoDB Connection Succeeded.');}
    else {console.log('Error in MongoDB connection : '+ JSON.stringify(err, undefined, 2));

    }
});

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };