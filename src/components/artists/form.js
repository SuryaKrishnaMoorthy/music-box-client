import React, { Component } from 'react'
import { createArtist } from '../../actions/artist'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createArtist
}, dispatch)

class ArtistForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      genre: ''
    }
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ name: '', genre: '' })
    // let body = { name: event.target.name.value, genre: event.target.genre.value }
    this.props.createArtist(this.state)
  }

  render () {
    return (
      <form onSubmit={ this.onSubmit } className="border rounded p-4">
        <div className="form-group">
          <label htmlFor="name">Artist Name</label>
          <input
            onChange={ this.onChange }
            defaultValue=""
            type="text"
            className="form-control"
            name="name"
            id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Artist Genre</label>
          <select
            onChange={ this.onChange }
            value={ this.state.genre }
            type="text"
            className="form-control"
            name="genre"
            id="genre">
            <option>-- Select a Genre --</option>
            <option value="country">Country</option>
            <option value="electronic">Electronic</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info text-light">Submit</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ArtistForm)
