import React, { Component } from 'react'

class FlvPlayer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	componentDidMount() {
	    const {videojs} = global
	    if (!videojs) {
	      return
	    }
	    const {file} = this.props
	    this.state.player = videojs("aa")
	}
	componentWillUnmount() {
	    if (this.state.player) {
	      this.state.player.dispose()
	    }
	}

	render() {
	    const {file: {name}} = this.props
	    const videoHtml = `
	      <video id="aa" class="video-js vjs-default-skin" controls width="750px" height="450px"
	       preload="auto"
	      >
	        <source src="./video/${name}" type="video/x-flv" />
	      </video>
	    `
	    return (
	      <div dangerouslySetInnerHTML={{__html: videoHtml}}></div>
	    )
	}
}

export default FlvPlayer