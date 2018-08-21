import artistModel from '../models/artist'

export const GET = 'GET'
// export const REMOVE = 'REMOVE'
export const CREATE = 'CREATE'

export const getArtists = () => {
  return async dispatch => {
    const payload = await artistModel.get()
    dispatch({
      type: GET,
      payload
    })
  }
}

export const removeArtist = (id) => {
  return async dispatch => {
    await artistModel.remove(id)

    const payload = await artistModel.get()
   dispatch({
     type: GET,
     payload
   })
  }
}

export const createArtist = (body) => {
  return async dispatch => {
    const artist = await artistModel.create(body)

    const payload = await artistModel.get()
     dispatch({
       type: GET,
       payload
     })
  }
}

// const payload = await artistModel.get()
 // dispatch({
 //   type: GET,
 //   payload
 // })
