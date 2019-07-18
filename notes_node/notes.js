const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const allNotes = loadNotes()
    console.log(chalk.green.inverse('Your notes'))
    allNotes.forEach(note => {
        console.log(note.title)
    });
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title) ** will look all throughout, if found in 89 will continue until 1000
    const duplicateNote = notes.find((note) => note.title === title) //will return undefined if there's no match

    // debugger

    if (!duplicateNote) {
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

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length !== notes.length) {
        console.log(chalk.green.inverse(`Successfully deleted ${title}`))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No notes deleted'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.green.inverse(`Title: ${noteToRead.title}`))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNote,
    readNote,
}