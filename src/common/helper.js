
const isJson = (value) => {
    try {
        JSON.parse(value)
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}

module.exports = {
    isJson
}
