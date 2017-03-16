import React, { Component } from 'react'
import * as Api from '../lib/Api'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'

const styles = {
	marginTop: '-43.5px'
}

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	videos: []
	  };
	}

	play(video){
		this.setState({
			currentVideo: video
		})
	}

	render(){
		let { videos, currentVideo } = this.state
		currentVideo = currentVideo|| videos && videos[0]
		return (
			<div>
				<div className="container jumbotron">
					<div className="col-md-8">
						{ currentVideo && <VideoPlayer video={ currentVideo } /> }
					</div>
					<div className="col-md-4">
						{ videos.length>0 && <VideoList videos={ videos } onPlayClick={ (video) => this.play(video) } /> }
					</div>
				</div>
			</div>
		)
	}

	componentDidMount(){
		Api.fetchData().then(
			videos => this.setState({
				videos
			})
		)
	}
}

export default App