import React, { Component } from 'react'
import FlvPlayer from './FlvPlayer'
import Mp4Player from './Mp4Player'

class VideoPlayer extends Component {
	render(){
		const { video } = this.props
		return (
			<div>
				{
					video.type === '.flv'?
					<FlvPlayer key={ video.name } file={video}/>:
					<Mp4Player key={ video.name } file={ video }/>
				}
				<h4>
					当前播放视频：{video.name}
				</h4>
			</div>
		)
	}
}

export default VideoPlayer