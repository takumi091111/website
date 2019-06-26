import { Entry, Entries } from '~/interfaces/Entry'

const API_URL = 'https://asamac-blog.now.sh'

const fetchEntry = async (entryId: string): Promise<Entry> => {
  const url = new URL(`${API_URL}/entries/${entryId}`)
  const response = await fetch(String(url), { method: 'GET' })
  return response.json()
}

const fetchEntries = async (limit = 10, skip = 0): Promise<Entries> => {
  const url = new URL(`${API_URL}/entries/list`)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('skip', skip.toString())
  const response = await fetch(String(url), { method: 'GET' })
  return response.json()
}

export { fetchEntry, fetchEntries }
