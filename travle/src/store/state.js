let city = '上海'
try {
    if (localStorage.city) {
        console.log("----------->localstorag"+ JSON.stringify(localStorage));
        city = localStorage.city;
    }
} catch (e) {
    console.log("localstorage city not data");
}

export default {
    city: city
}