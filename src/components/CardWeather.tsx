import { ChangeEvent, FormEvent, useState } from "react"
import { Loader } from "./Loader"
import { useWeather } from "../hooks/useWeather"
import { formatDate } from "../helpers";

export const CardWeather = () => {
    const {
        weather,
        isLoading,
        error,
        handleGetWeather
    } = useWeather();

    const [query, setQuery] = useState('')
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(query) {            
            handleGetWeather(query)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    
    return (
        <div className="bg-white min-w-[450px] rounded-md py-10 relative">
            {isLoading ? <Loader /> : (
                <>
                    { weather.location.localtime ? 
                        <span className="w-full text-sm absolute -top-[-10px] text-center">
                            { formatDate(weather.location.localtime) }
                        </span> : <></> }
                    
                    <h1 className="text-center font-black text-2xl uppercase">
                        { weather.location.name ? weather.location.name : 'Consulta el clima' }
                    </h1>

                    <div className="flex flex-col items-center">
                        <img
                            src="./src/assets/icons/cloudy.png"
                            className="w-[200px] h-[200px]"   
                        />
                        <p className="font-black text-5xl">
                            °{ weather.current.temperature ? 
                               weather.current.temperature : 22 }
                        </p>
                    </div>
                </>
            )}
            
            <form className="px-5 py-2" autoComplete="off" onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <label className="font-bold" htmlFor="place">Ingresa la ciudad</label>
                    <input
                        className="w-full border border-gray-400 rounded-md outline-none py-1 px-2"
                        id="place"
                        name="place"
                        type="text"
                        placeholder="Escribe algún lugar ej: Las vegas"
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type="submit"
                    value="Buscar"
                    className="bg-indigo-500 text-white uppercase w-full cursor-pointer font-black py-2 mt-5 disabled:opacity-70"
                    disabled={!query}
                />
            </form>

            { error && <span className="bg-red-500 text-white mx-5 py-2 font-bold text-center block"> { error } </span>}
        </div>
    )
}
