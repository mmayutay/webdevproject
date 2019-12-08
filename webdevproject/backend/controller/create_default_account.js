
const Admin_Model = require('../model/adminschema')
let create_default_account = (req, res) => {
    Admin_Model.find({}, (err, data) => {
        if (err || !data.length) {
            let admin = new Admin_Model({
                username: "admin",
                password: "admin"
            });
            admin.save((error, account) => {
                if (error) {
                    return res.send(err)
                } else {
                    return res.send(account)
                }
            })
        }
        else {
            return res.send(data)
        }
    })

}

module.exports = { create_default_account }