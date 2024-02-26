
export const fetchData = async () => {
    const data = await fetch('https://restcountries.com/v2/all')
    const response = data.json();
    return response;
}


