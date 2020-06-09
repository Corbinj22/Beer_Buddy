export const fetchedBeers = async () => {
  try {
    let response = await fetch('https://api.punkapi.com/v2/beers')
    let data = await response.json()
    return data
  }
  catch(error) {
    console.error(error);
  }
}
