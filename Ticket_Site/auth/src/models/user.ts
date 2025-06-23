import mongoose from "mongoose";

interface userAttributes {
    email: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(user: userAttributes) : UserDoc;
}
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = (user: userAttributes) => {
    return new User(user);
}

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
export { User };