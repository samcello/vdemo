import React, { Component } from 'react'
import VideoItem from './VideoItem'


class VideoList extends Component {
	render(){
		let { videos, onPlayClick } = this.props
		videos = videos.map( video => { return <VideoItem key={ video.name } video={ video } onPlayClick={ onPlayClick }/> } )
		return (
			<div>
				{ videos }
			</div>
		)
	}
}

export default VideoList