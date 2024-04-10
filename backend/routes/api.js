const express = require('express')
const router = express.Router()
const noteActions = require('../actions/api/noteActions')

// endpoint - pobieranie notatek
router.get('/notes', noteActions.getAllNotes)
// endpoint - pobieranie konkretnej notatki
router.get('/notes/:id', noteActions.getNote)
// endpoint - zapisywanie notatek
router.post('/notes', noteActions.saveNote)
// endpoint - edytowanie konkretnej notatki
router.put('/notes/:id', noteActions.updateNote)
// endpoint - usuwanie konkretnej notatki
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router
