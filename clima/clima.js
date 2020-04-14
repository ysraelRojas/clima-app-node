const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7f6cec6132139e31b53facdc3e09ea21&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};