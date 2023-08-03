import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.dmb5eru.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch(error) {
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;

//C:\Program Files\MongoDB\Server\6.0\data\ data
//C:\Program Files\MongoDB\Server\6.0\log\ log
//meNmVLFWB28jhhJ7
