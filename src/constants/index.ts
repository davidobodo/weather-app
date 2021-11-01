export const LOCAL_STORAGE_KEY = "dcs_weather_app";

export const MOST_POPULOUS_COUNTRIES = [
    "China",
    "India",
    "United States",
    "Indonesia",
    "Pakistan",
    "Brazil",
    "Nigeria",
    "Bangladesh",
    "Russia",
    "Mexico",
    "Japan",
    "Ethiopia",
    "Philippines",
    "Egypt",
    "Vietnam"
];

export const MOST_POPULOUS_CITIES = [
    "Tokyo",
    "Delhi",
    "Shanghai",
    "Sao Paulo",
    "Mexico City",
    "Dhaka",
    "Cairo",
    "Beijing",
    "Mumbai",
    "Osaka",
    "Karachi",
    "Chongqing",
    "Istanbul",
    "Buenos Aires",
    "Kolkata"
];

export const DESKTOP_IMAGES = [
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/clearsky_aopcw5.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/snow_uzeytt.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/clouds_qfvdox.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/rain_jlwjbr.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/thunderstorm_su9vr3.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/v1635724776/mist_fnsmh4.jpg"
];

export const MOBILE_IMAGES = [
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724777/clearsky_aopcw5.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724777/snow_uzeytt.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724777/clouds_qfvdox.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724777/rain_jlwjbr.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724777/thunderstorm_su9vr3.jpg",
    "https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_469/v1635724776/mist_fnsmh4.jpg"
];

export const TESTING_TABLE_MOCK_DATA = [
    {
        name: "SA",
        temperature: 2.3
    },
    {
        name: "Morocco",
        temperature: 23.4
    },
    {
        name: "Asia",
        temperature: 100
    },
    {
        name: "hello",
        temperature: 34.2
    }
];

export const TEST_WEATHER_DATA = {
    coord: {
        lon: 3.75,
        lat: 6.5833
    },
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n"
        }
    ],
    base: "stations",
    main: {
        temp: 302.33,
        feels_like: 309.33,
        temp_min: 302.33,
        temp_max: 302.33,
        pressure: 1012,
        humidity: 90,
        sea_level: 1012,
        grnd_level: 1012
    },
    visibility: 10000,
    wind: {
        speed: 2.57,
        deg: 208,
        gust: 7.11
    },
    rain: {
        "1h": 0.75
    },
    clouds: {
        all: 36
    },
    dt: 1635705453,
    sys: {
        type: 1,
        id: 1185,
        country: "NG",
        sunrise: 1635658306,
        sunset: 1635701118
    },
    timezone: 3600,
    id: 2332453,
    name: "Lagos",
    cod: 200
};
