// Same concept as Spring Data Entity
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        roles:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Role'
            }
    }
);

// UserSchema.methods.add = function (user_id) {
//     if (this.following.indexOf(user_id) === -1) {
//         this.following.push(user_id)
//     }
//     return this.save()
// }

module.exports = mongoose.model('User', UserSchema);