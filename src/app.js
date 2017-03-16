let express = require('express')
let app = new express()
let path = require('path')
let fs = require('fs')
const dir = path.join(__dirname, '../public/video')
app.use(express.static('public'))

app.get('/plays', (req, res) => {
	fs.readdir(dir, (err,items) => {
		let videos = items
		.filter( item => {
			const ext = path.extname(item)
			return ext==='.flv' || ext==='.mp4'
		})
		.map( item => {
			console.log(item)
			return {
				name:item,
				path: `/public/video/${item}`,
				type: path.extname(item),
			}
		})
		res.json({ videos })
	})
})

app.listen(3002, () => {
	console.log('Application runing on port 3002!')
})