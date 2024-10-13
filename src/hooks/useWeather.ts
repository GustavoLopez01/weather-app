import { useState } from "react"
import { z } from "zod"

// Validate response api with zod
const weatherSchema = z.object({
    request: z.object({
        type: z.string()
    }),
    location: z.object({
        name: z.string(),
        country: z.string(),
        localtime: z.string()
    }),
    current: z.object({
        temperature: z.number(),
        weather_code: z.number(),
        wind_speed: z.number(),
    }),
})

type Weather = z.infer<typeof weatherSchema>

const initialState = {
    request: {
        type: ''
    },
    location: {
        name: '',
        country: '',
        localtime: ''
    },
    current: {
        temperature: 0,
        weather_code: 0,
        wind_speed: 0
    }
}

export const useWeather = () => {

    const [weather, setWeather] = useState<Weather>(initialState)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleGetWeather = async (query: string) => {
        try {
            setIsLoading(true)
            const KEY = import.meta.env.VITE_KEY_WEATHER
            const URL = `http://api.weatherstack.com/current?access_key=${KEY}&query=${query}`
            const response = await fetch(URL)
            const data = await response.json()
            const validateResponse = weatherSchema.safeParse(data)

            if(validateResponse.success) {
                setWeather(data)
            } else {
                setError('Ocurrió un error al consultar el clima.')
            }
        } catch (error) {
            console.error(`Ocurrió un error al consultar el clima del sitio -> ${query}`);            
        } finally {            
            setIsLoading(false)
        }
    }

    return {
        weather,
        isLoading,
        error,
        handleGetWeather
    }
}