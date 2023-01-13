const moment = require('moment');

const helper = {
        mudaData: (data)=>{
        return moment(data).format("DD/MM/YYYY HH:mm");
        },
}

module.exports = helper;

