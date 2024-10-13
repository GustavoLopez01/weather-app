export const formatDate = (date: string) : string => {
    const objectDate = new Date(date)
    const dateOptions : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric'
    }
    return Intl.DateTimeFormat('es-ES', dateOptions).format(objectDate)
}