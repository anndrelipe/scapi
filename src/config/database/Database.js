import mongoose from "mongoose";

class Database {

    static async connection () {
        // eslint-disable-next-line no-undef
        mongoose.connect(process.env.MONGODB_STRING_CONNECTION);
        return mongoose.connection;
    }
    
}

export default Database;