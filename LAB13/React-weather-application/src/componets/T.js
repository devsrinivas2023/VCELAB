const dt = [
    {
        "id": 1269843,
        "name": "Hyderabad",
        "coord": {
            "lat": 17.3753,
            "lon": 78.4744
        },
        "main": {
            "temp": 302.38,
            "feels_like": 304.74,
            "temp_min": 302.38,
            "temp_max": 302.88,
            "pressure": 1008,
            "humidity": 61
        },
        "dt": 1689502159,
        "wind": {
            "speed": 6.17,
            "deg": 280
        },
        "sys": {
            "country": "IN"
        },
        "rain": {
            "1h": 1.7
        },
        "snow": null,
        "clouds": {
            "all": 75
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ]
    },
    {
        "id": 1176734,
        "name": "Hyderabad",
        "coord": {
            "lat": 25.3924,
            "lon": 68.3737
        },
        "main": {
            "temp": 310.78,
            "feels_like": 315.74,
            "temp_min": 310.78,
            "temp_max": 310.78,
            "pressure": 998,
            "humidity": 40,
            "sea_level": 998,
            "grnd_level": 994
        },
        "dt": 1689502154,
        "wind": {
            "speed": 8.89,
            "deg": 236
        },
        "sys": {
            "country": "PK"
        },
        "rain": null,
        "snow": null,
        "clouds": {
            "all": 73
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "id": 1269844,
        "name": "Hyderābād",
        "coord": {
            "lat": 17.25,
            "lon": 78.5
        },
        "main": {
            "temp": 302.28,
            "feels_like": 305.24,
            "temp_min": 301.79,
            "temp_max": 302.28,
            "pressure": 1008,
            "humidity": 65
        },
        "dt": 1689501935,
        "wind": {
            "speed": 6.17,
            "deg": 280
        },
        "sys": {
            "country": "IN"
        },
        "rain": {
            "1h": 2.2
        },
        "snow": null,
        "clouds": {
            "all": 75
        },
        "weather": [
            {
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }
        ]
    }
]
for(i=0;i<dt.length;i++){
    console.log(dt[i].name,"\n coordinates are :\t",dt[i].coord.lat,dt[i].coord.lon);
    console.log(dt[i])
    console.log("values ",dt[i].name,dt[i].sys.country)
}

// {
//     id: 1269844,
//     name: 'Hyderābād',
//     coord: { lat: 17.25, lon: 78.5 },
//     main: {
//       temp: 302.28,
//       feels_like: 305.24,
//       temp_min: 301.79,
//       temp_max: 302.28,
//       pressure: 1008,
//       humidity: 65
//     },
//     dt: 1689501935,
//     wind: { speed: 6.17, deg: 280 },
//     sys: { country: 'IN' },
//     rain: { '1h': 2.2 },
//     snow: null,
//     clouds: { all: 75 },
//     weather: [
//       {
//         id: 501,
//         main: 'Rain',
//         description: 'moderate rain',
//         icon: '10d'
//       }