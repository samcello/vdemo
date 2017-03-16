import React, { Component } from 'react'

class Mp4Player extends Component {
	render(){
		let filename = this.props.file.name
		const videoHtml = `<video id="sampleMovie" width=745px height=450px preload controls>
				<source src="./video/${filename}" />
			</video>`
		return (
	      <div dangerouslySetInnerHTML={{__html: videoHtml}}></div>
	    )
	}
}

export default Mp4Player