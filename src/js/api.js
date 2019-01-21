import '@babel/polyfill'

const API_URL = 'https://asamac-blog.now.sh'

const fetchEntries = async (limit = 10, skip = 0) => {
  const url = new URL(`${API_URL}/entries/list`)
  url.searchParams.append('limit', limit)
  url.searchParams.append('skip', skip)
  const response = await fetch(url, { method: 'GET' })
  return response.json()
}

const fetchEntry = async (entryId) => {
  const url = new URL(`${API_URL}/entries/${entryId}`)
  const response = await fetch(url, { method: 'GET' })
  return response.json()
}

module.exports = {
  fetchEntries,
  fetchEntry
}
