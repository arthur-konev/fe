const artists = [
    {
        "id": 2,
        "name": "Джон Леннон",
        "birth_year": null,
        "age": null,
        "country": null,
        "albums_count": 1
    },
    {
        "id": 3,
        "name": "Курт Кобейн",
        "birth_year": 1967,
        "age": 59,
        "country": "США",
        "albums_count": 1
    },
    {
        "id": 4,
        "name": "Соня Грезе",
        "birth_year": 1993,
        "age": 33,
        "country": "Россия",
        "albums_count": 1
    },
    {
        "id": 5,
        "name": "Рианна",
        "birth_year": 1988,
        "age": 38,
        "country": "США",
        "albums_count": 1
    },
    {
        "id": 6,
        "name": "Ники Минаж",
        "birth_year": 1982,
        "age": 44,
        "country": "США",
        "albums_count": 1
    },
    {
        "id": 7,
        "name": "Mnogoznaal",
        "birth_year": 1993,
        "age": 33,
        "country": "Россия",
        "albums_count": 2
    },
    {
        "id": 8,
        "name": "Лев Лещенко",
        "birth_year": 1942,
        "age": 84,
        "country": null,
        "albums_count": 0
    }
]

const albums = [
    {
        "id": 7,
        "name": "Гостиница «Космос»",
        "year": 2018,
        "artist": "Mnogoznaal",
        "artist_id": 7,
        "status": "regular",
        "status_display": "Обычный"
    },
    {
        "id": 8,
        "name": "Круг ветров",
        "year": 2020,
        "artist": "Mnogoznaal",
        "artist_id": 7,
        "status": "regular",
        "status_display": "Обычный"
    },
    {
        "id": 1,
        "name": "Imagine",
        "year": 1971,
        "artist": "Джон Леннон",
        "artist_id": 2,
        "status": "platinum",
        "status_display": "Платиновый"
    },
    {
        "id": 3,
        "name": "Nevermind",
        "year": 1991,
        "artist": "Курт Кобейн",
        "artist_id": 3,
        "status": "platinum",
        "status_display": "Платиновый"
    },
    {
        "id": 6,
        "name": "Pink Friday",
        "year": 2010,
        "artist": "Ники Минаж",
        "artist_id": 6,
        "status": "platinum",
        "status_display": "Платиновый"
    },
    {
        "id": 5,
        "name": "Anti",
        "year": 2016,
        "artist": "Рианна",
        "artist_id": 5,
        "status": "platinum",
        "status_display": "Платиновый"
    },
    {
        "id": 4,
        "name": "Заткнись",
        "year": 2022,
        "artist": "Соня Грезе",
        "artist_id": 4,
        "status": "regular",
        "status_display": "Обычный"
    }
]

export function get_artists() {
  let result = []
  for (const x of artists) {
    const d = {"id": x.id, "name": x.name}
    result.push(d)
  }
  return result
}

export function get_albums(artist_id = null) {
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
  return result
}

export function get_album(id){
  let i = 0
  const data = albums
  while (i < data.length && data[i].id != id) {
    i++;
  }
  let result;
  if (i < data.length)
    result = data[i]
  else
    result = null
  return result
}
