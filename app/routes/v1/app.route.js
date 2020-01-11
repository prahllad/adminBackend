'use strict';
const uploaderController = require('../../controllers/v1/uploader.controller');
const PUBLIC = [
    { type: 'GET', path:'/mentors', handlers:[uploaderController.getAllmentor]},
    { type:'POST', path:'/update/task/:mentor',handlers:[uploaderController.updateMentorWithTask]}

];
module.exports = {
     PUBLIC
}