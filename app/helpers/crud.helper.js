'use strict';
const mongoose = require('mongoose');
const constant = require('../../configs/constants');
const Mentor = mongoose.model('Mentor');
const self = module.exports = {
    async getMentor(data) {
        const mentorList = await Mentor.find({}).lean().limit(50);
        if (mentorList) {
            return mentorList;
        }

    },
    async updateMentor(id,tasklist){

        const mentorList = await Mentor.findOne({_id:id});
        let res = await Mentor.update({$push:{tasklist:tasklist}});
        if(res){
            return res;
        }
        throw constant.errors.E_ERROR;


    }
   



};
