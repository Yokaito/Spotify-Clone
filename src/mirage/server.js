import { createServer, Model } from 'miragejs'

export default function () {
  createServer({
    models: {
      song: Model
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
    },

    routes() {
      this.get('/api/songs', schema => {
        return schema.songs.all()
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
