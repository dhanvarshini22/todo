const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "GxeqaFAT0I4EjW3u"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://dhanvarshini22:<GxeqaFAT0I4EjW3u>@todo.k1woono.mongodb.net/`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'dhanvarshini22',
        pass: PASSWORD
    });
}

main().then(() => {
    console.log(`Connected`);
    const commentsSchema = new mongoose.Schema({
        name: String,
        email: String,
        text: String,
        date: String
      });
    const commentsModel = mongoose.model('comments', commentsSchema);
    commentsModel.findOne({}).then(console.log)
    // mongoose.connection.listCollections().then(console.log)
})

main().then(() => {
    console.log('connected to database');
}).catch(console.log);