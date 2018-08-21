import { GET} from '../actions/artist'

const initialArtists = []

const artists = (state = initialArtists, action)  => {
  switch (action.type) {
    case GET:
      return action.payload
    // case REMOVE:
    //   return state.filter(artist => artist.id !== action.payload.id)
    default:
      return state
  }
}

export default artists
