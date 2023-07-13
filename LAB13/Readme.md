# fetch open whether map using GPs and Location

our API provider <a href="https://openweathermap.org/api/one-call-3"> Open weather map</a>
# Fields in API response
<span>coord</span>
<li>coord.lon Longitude of the location</li>
<li>coord.lat Latitude of the location>
weather (more info Weather condition codes)
<li>weather.id</li> Weather condition id
weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
weather.description Weather condition within the group. You can get the output in your language. Learn more
weather.icon Weather icon id
base Internal parameter
main
main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.feels_like Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
main.humidity Humidity, %
main.temp_min Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.temp_max Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
main.sea_level Atmospheric pressure on the sea level, hPa
main.grnd_level Atmospheric pressure on the ground level, hPa
visibility Visibility, meter. The maximum value of the visibility is 10km
wind
wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
wind.deg Wind direction, degrees (meteorological)
wind.gust Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
clouds
clouds.all Cloudiness, %
rain
rain.1h (where available) Rain volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
rain.3h (where available) Rain volume for the last 3 hours, mm. PPlease note that only mm as units of measurement are available for this parameter.
snow
snow.1h(where available) Snow volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter.
snow.3h (where available)Snow volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter.
dt Time of data calculation, unix, UTC
sys
sys.type Internal parameter
sys.id Internal parameter
sys.message Internal parameter
sys.country Country code (GB, JP etc.)
sys.sunrise Sunrise time, unix, UTC
sys.sunset Sunset time, unix, UTC
timezone Shift in seconds from UTC
id City ID. Please note that built-in geocoder functionality has been deprecated. Learn more here.
name City name. Please note that built-in geocoder functionality has been deprecated. Learn more here.
cod Internal parameter