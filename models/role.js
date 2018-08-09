
const mongoose = require('mongoose');

let RoleSchema = new mongoose.Schema(
    {
        name: String,
        level: String,
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

// UserSchema.methods.add = function (user_id) {
//     if (this.following.indexOf(user_id) === -1) {
//         this.following.push(user_id)
//     }
//     return this.save()
// }

module.exports = mongoose.model('Role', RoleSchema)