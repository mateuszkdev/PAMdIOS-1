
const fetchData = async (latitude = 50.29, longitude = 19.10) => {

    const ENDPOINT = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`

    try {

        const res = await fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res instanceof Error) throw (res)

        const data = await res.json()
        const hour = new Date(data.current.time).getHours()

        console.log(`
            Temperatura: ${data.current.temperature_2m}${data.current_units.temperature_2m}
            Prędkość wiatru: ${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}
            Pora dnia: ${hour >= 6 && hour < 18 ? 'dzień' : 'noc'}
        `)

    } catch (e) {
        console.error(e)
    }

}

fetchData()
fetchData(20, 50)