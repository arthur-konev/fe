import artists from '../data/artists.json'
import albums from '../data/albums.json'
import songs from '../data/songs.json'


export function get_artists() {
  let result = []
  for (const x of artists) {
    const d = {"id": x.id, "name": x.name}
    result.push(d)
  }
  return result
}

export function get_albums(artist_id: string | number | null = null) {
  let result = []
  for (const x of albums) {
    if (!artist_id || x.artist_id == artist_id) {
      const d = {"id": x.id, "name": x.name}
      result.push(d)
    }
  }
  return result
}

export function get_artist(id: string | number){
  let i = 0
  const data = artists
  while ((i < data.length) && (data[i].id != id)) {
    i++;
  }
  let result;
  if (i < data.length)
    result = data[i]
  else
    result = null
  return {...result}
}

export function set_artist(id: string | number, new_data){
  let i = 0
  const data = artists
  while ((i < data.length) && (data[i].id != id)) {
    i++;
  }
  if (i < data.length)
    data[i].name = new_data.name
    data[i].birth_year = new_data.birth_year
}

export function get_album(id: string | number){
  let i = 0
  const data = albums
  while (i < data.length && data[i]?.id != id) {
    i++;
  }
  let result;
  if (i < data.length)
    result = data[i]
  else
    result = null
  return result
}

export function get_songs(album_id: string | number | null = null) {
  const album = album_id == null ? null : get_album(album_id)
  const result = []
  for (const x of songs) {
    if (album_id == null || (album && x.album === album.name && x.artist === album.artist)) {
      result.push({id: x.id, name: x.title})
    }
  }
  return result
}

export function get_song(id: string | number) {
  const song = songs.find(x => x.id === Number(id))
  if (!song) return null

  const album = albums.find(x => x.name === song.album && x.artist === song.artist)
  return {...song, album_id: album?.id, artist_id: album?.artist_id}
}
