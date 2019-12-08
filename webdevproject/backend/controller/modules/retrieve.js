const route_model = require('../../model/route')

let retrieveAll_route = (req,res) => {
    route_model.find({}, (err,data) => {
        if(err) {
            return res.send(err)
        }
        else{
            return res.send(data)
        }
    })
}

// let retrieveOne_route = (req,res) => {
//     console.log(req.body)
//     route_model.findOne({route: req.body}, (err,data) => {
//         if(err) {
//             return res.send(err)
//         }else{
//             return res.send(data)
//         }
//     })
// }

module.exports = { retrieveAll_route }