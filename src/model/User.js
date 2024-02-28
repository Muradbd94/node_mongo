import mongoose from 'mongoose';

const UserModel = mongoose.model('User',{
    username: {
        type: String,
        required: true
    },
    useremail:{
        type: String,
        required: true
    },
    // post: {
    //     type: mongoose.Types.Uuid,
    //     ref: 'Post'
    // },
    password: {
        type: String,
        required: true
    }
 });

 export default UserModel;