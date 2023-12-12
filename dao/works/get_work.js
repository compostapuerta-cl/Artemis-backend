const User=require('../../models/user');
const Folder=require('../../models/work_folder');
const Work=require('../../models/work')
const {error_response, custom_error_response}=require('../../utils/utils')


function get_work(req, res){
    User.findById(req.user._id)
    .exec(function (err, user){
        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        Folder.findOne({name: req.query.folder_name, owner: user._id})
        .exec(function (err, folder){
            if(err){ return error_response(400, res, err) }

            if(folder==null){ return custom_error_response(400, res, "Folder no encontrado") }

            Work.findOne({name: req.query.folder_name, folder: folder._id})
            .exec(function (err, work){
                if(err){ return error_response(400, res, err) }

                if(work==null){ return custom_error_response(400, res, "Obra no encontrada") }

                res.send(work)
            })
        })
    })
}

module.exports={get_work}