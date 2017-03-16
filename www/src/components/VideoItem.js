import React, { Component } from 'react'

class VideoItem extends Component {
	render(){
		const { video, onPlayClick } = this.props
		return (
			<div className="media">
				<a href="javascript:void" onClick={ () => onPlayClick(video) }>
				  <div className="media-left media-middle">
				    <img className="media-object" src="../img/nodejs.jpg" alt="..." width="150px" height="84px"/>
				  </div>
				  <div className="media-body">
				    <h4 className="media-heading" > { video.name }</h4>
				  </div>
				</a>
			</div>
		)
	}
}

export default VideoItem