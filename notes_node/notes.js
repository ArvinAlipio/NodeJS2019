const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body   
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Duplicate value'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notesToKeep.length !== notes.length) {
        console.log(chalk.green.inverse(`Successfully deleted ${title}`))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No notes deleted'))
    }
}

const readNote = function () {

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const notes = JSON.parse(dataJSON)
    
        return notes
    } catch (e) {
        return []
    }  
}


module.exports = {
    getNotes,
    addNote,
    removeNote
}