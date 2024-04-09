const Note = require('../../db/models/note')

module.exports = {
	saveNote(req, res) {
		const newNote = new Note({ title: 'zrobić zakupy', body: 'mięso, olej, woda' })
		newNote.save().then(() => {
			console.log('Notatka została zapisana')
		})

		res.send('Serwer działa')
	},
}
