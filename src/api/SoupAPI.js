const BASE_URL = "https://soup-api-001.herokuapp.com/api/"

const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init)
    if (response.ok) {
      return await response.json()
    }
    else {
      throw new Error(`Bad response: ${response.status} ${response.statusText}`)
    }
  }
  catch (e) {
    console.error(e)
    return null
  }
}

const fetchSoups = async () => {
  const url = BASE_URL
  return await tryCatchFetch(url)
}

const fetchSoupByID = async (soupID) => {
  const url = BASE_URL + `${soupID}/`
  return await tryCatchFetch(url)
}

const addSoup = async (soupObj) => {
  const url = BASE_URL
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(soupObj)
  }
  return await tryCatchFetch(url, init)
}
  

const exportItems = {
  fetchSoups,
  fetchSoupByID,
  addSoup
}

export default exportItems