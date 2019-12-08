const route_model = require('../../model/route')
const place_model = require('../../model/newplace')


let delete_route = (req, res) => {
    console.log(req)
    route_model.findOneAndDelete(
        {"route": req}, //condition
        (err, data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )
}

let delete_places = (req,res) => {
    console.log(req)
    place_model.findOneAndDelete(
        {"location": req},
        (err,data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )

}
module.exports = { delete_route, delete_places }