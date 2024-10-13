import { CardWeather } from "./components/CardWeather"

function App() {

  return (
    <>
      <main className="max-w-4xl mx-auto">
        <section className="h-[100vh] flex justify-center items-center">
          <CardWeather />
        </section>
      </main>
    </>
  )
}

export default App
// {
//   "request": {
//       "type": "City",
//       "query": "Mexico City, Mexico",
//       "language": "en",
//       "unit": "m"
//   },
//   "location": {
//       "name": "Mexico City",
//       "country": "Mexico",
//       "region": "The Federal District",
//       "lat": "19.429",
//       "lon": "-99.128",
//       "timezone_id": "America\/Mexico_City",
//       "localtime": "2024-10-12 13:39",
//       "localtime_epoch": 1728740340,
//       "utc_offset": "-6.0"
//   },
//   "current": {
//       "observation_time": "07:39 PM",
//       "temperature": 19,
//       "weather_code": 116,
//       "weather_icons": [
//           "https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"
//       ],
//       "weather_descriptions": [
//           "Partly cloudy"
//       ],
//       "wind_speed": 8,
//       "wind_degree": 20,
//       "wind_dir": "NNE",
//       "pressure": 1030,
//       "precip": 0,
//       "humidity": 40,
//       "cloudcover": 25,
//       "feelslike": 19,
//       "uv_index": 11,
//       "visibility": 10,
//       "is_day": "yes"
//   }
// }