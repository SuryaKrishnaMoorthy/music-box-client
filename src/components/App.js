import React, { Component } from 'react'
import Header from './shared/Header'
import ArtistList from './artists/list'
import ArtistForm from './artists/form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArtists } from '../actions/artist'

const mapStateToProps = ({ artists }) => ({ artists })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArtists
}, dispatch)

class App extends Component {

  componentDidMount() {
    this.props.getArtists()
  }

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col">
              <h2 className="h4 text-center">All Artists</h2>
              <ArtistList artists={ this.props.artists } />
            </div>
            <div className="col-4">
              <h2 className="h4 text-center">Add a new Artist</h2>
              <ArtistForm />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
