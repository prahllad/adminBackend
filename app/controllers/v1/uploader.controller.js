'use strict'
const constants = require('../../../configs/constants');
const response = require('../../response'); 
const crudHelper = require('../../helpers/crud.helper');
module.exports = {
    getAllmentor: async (req, res) => {
        try {
            const mentorList = await crudHelper.getMentor();
            return response.success(res, constants.success.OK, mentorList);
        } catch(error) {
            return response.error(res, error);
        }
    },
    updateMentorWithTask:async(req,res) =>{
        try{
            const update = await crudHelper.updateMentor(req.params.mentor,task);
            return response.success(res,constants.success.OK , update);
        }catch(error){
            return response.error(res,error);

        }
    },
}