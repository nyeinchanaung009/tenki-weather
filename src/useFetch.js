const getData = async (query) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4c22fb988msh2d5b7f80cb1f303p17ccaejsn39593c3a32a8',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

export default getData;