export const search = (query, type) => {

  const headers = {
    headers: {
      Authorization: 'Bearer BQB28-AZ7Ao5xDX7NP6oYG06UHQbQ3hA86UqWbV31KKl3hhuq6rH6opvDfvnIMBnrUSMyoxaLzsGLxTCR88',
    },
  };

  return fetch(`https://api.spotify.com/v1/search?query=${query}&type=${type}`, headers)
    .then(data => data.json());
}

export const searchAlbums = query => search(query, 'album');

export const searchArtists = query => search(query, 'artist');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');
