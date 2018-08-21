import React from 'react'
import { removeArtist } from '../../actions/artist'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeArtist
}, dispatch)

const ArtistList = ({ artists, removeArtist }) => {
  const lis = artists.map((artist, i) => {
    return <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={ i }>
        { artist.name }
        <section>
          <span className="badge badge-primary badge-pill">{ artist.genre }</span>
          <a onClick={() => removeArtist(artist.id) } className="badge badge-danger badge-pill text-white ml-2">Remove</a>
        </section>
      </li>
  })

  return <ul className="list-group">{ lis }</ul>
}

export default connect(null, mapDispatchToProps)(ArtistList)
