var axios = require('axios');

const showResponse = (status, message, data = null, other = null, code = null) => {
    let response = {}
    response.status = status
    response.message = message
    if (data !== null) {
        response.data = data
    }
    if (other !== null) {
        response.other = other
    }
    if (code !== null) {
        response.code = code
    }
    return response;
}

const showOutput = (res, response, code) => {
    delete response.code;
    res.status(code).json(response);
}

const randomStr = (len, arr) => {
    var digits = arr;
    let OTP = '';
    for (let i = 0; i < len; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    if (OTP.length < len || OTP.length > len) {
        randomStr(len, arr);
    }
    return (OTP);
}

const showConsole = (content) => {
    console.log(content);
}

const validateParams = (request, feilds) => {
    var postKeys = [];
    var missingFeilds = [];
    for (var key in request.body) {
        postKeys.push(key);
    }
    for (var i = 0; i < feilds.length; i++) {
        if (postKeys.indexOf(feilds[i]) >= 0) {
            if (request.body[feilds[i]] == "")
                missingFeilds.push(feilds[i]);
        } else {
            missingFeilds.push(feilds[i]);
        }
    }
    if (missingFeilds.length > 0) {
        let response = showResponse(false, `Following fields are required : ${missingFeilds}`)
        return response;
    }
    let response = showResponse(true, ``)
    return response;
}

const validateParamsArray = (data, feilds) => {
    var postKeys = [];
    var missingFeilds = [];
    for (var key in data) {
        postKeys.push(key);
    }
    for (var i = 0; i < feilds.length; i++) {
        if (postKeys.indexOf(feilds[i]) >= 0) {
            if (data[feilds[i]] == "")
                missingFeilds.push(feilds[i]);
        } else {
            missingFeilds.push(feilds[i]);
        }
    }
    if (missingFeilds.length > 0) {
        let response = showResponse(false, `Following fields are required : ${missingFeilds}`)
        return response;
    }
    let response = showResponse(true, ``)
    return response;
}


module.exports = {
    showResponse,
    showOutput,
    randomStr,
    validateParams,
    validateParamsArray,
    showConsole
}