import { createServer, Model } from 'miragejs'

export default function () {
  createServer({
    models: {
      song: Model,
      playlist: Model
    },

    seeds(server) {
      server.create('song', {
        id: 1,
        url: '/1/music.mp3',
        image: '/1/image.jpg',
        title: 'Lil Nas X, Jack Harlow - INDUSTRY BABY',
        artists: ['Lil Nax X', 'Jack Harlow']
      })
      server.create('song', {
        id: 2,
        url: '/2/music.mp3',
        image: '/2/image.jpg',
        title: 'STAY (with Justin Bieber)',
        artists: ['The Kid LAROI', 'Justin Bieber']
      })
      server.create('song', {
        id: 3,
        url: '/3/music.mp3',
        image: '/3/image.jpg',
        title: 'Ansel Elgort - Supernova',
        artists: ['Ansel Elgort']
      })
      server.create('playlist', {
        id: 1,
        title: 'My Playlist',
        songs: [3, 1, 2]
      })
    },

    routes() {
      this.get('/api/songs', schema => {
        return schema.songs.all()
      })

      this.get('/api/playlists', schema => {
        return schema.playlists.all()
      })

      this.get('/api/playlists/:id', (schema, request) => {
        return schema.playlists.find(request.params.id)
      })

      this.get('/api/songs/:id', (schema, request) => {
        return schema.songs.find(request.params.id)
      })

      /* this.post('/api/songs', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        return schema.reminders.create(attrs)
      }) */
    }
  })
}
