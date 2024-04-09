const Note = require('../../db/models/note')

class NoteActions {
	saveNote(req, res) {
		const title = req.body.title
		const body = req.body.body

		res.send('Notatka została stworzona.Tytuł:' + title + ' treść:' + body)
	}

	getAllNotes(req, res) {
		res.send('API działa')
	}

	getNote(req, res) {
		res.send('Info o notatkach')
	}

	updateNote(req, res) {
		res.send('Notatka została pobrana')
	}

	deleteNote(req, res) {
		const id = req.params.id
		res.send('Notatka została usunięta. ID: ' + id)
	}
}

module.exports = new NoteActions()
