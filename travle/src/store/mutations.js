export default {
    changeCity: function (state, city) {
        console.log('-------------> mutations <---------------')
        state.city = city;
        try {
            localStorage = city;
        } catch (e) {
            console.log(e);
        }
        localStorage.city = city;
    }
}