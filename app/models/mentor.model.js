'use strict';
const mongoose = require('mongoose');

const constant = require('../../configs/constants');
const mentorSchema = mongoose.Schema({
    
        name: {
            type: String,
            trim: true,
            default: ''
        },
        username: {
            type: String,
            trim: true,
            required: true,
            minlength: 4,
            lowercase: true,
            unique: true
        },
        emails: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            unique: true
        },
        DOB:{
            type:Date,
            default:Date.now()

        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        address:{
            type :String,
            require:true

        },
        sector_of_job:{
            type:String
        },
        phone: {
            type: String,
            trim: true,
            default: ''
        },
        company_name: {
            type: String,
            trim: true,
            default: ''
        },
        designation: {
            type: String,
            trim: true,
            default: ''
        },
        tasklist:[{
            name:{
                type:String,
                default:'',
                trim:true
            },
            taskLink:{
                type:String,
                default:'',
                trim:true
            },
            task_description:{
                type:String,
                default:''
            }
        }]

    }, {
    timestamps: true,
    autoIndex: true
});
mentorSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
const Mentor = mongoose.model('Quiz', mentorSchema);
module.exports = Mentor;