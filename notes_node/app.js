// Core modules
// Installed modules/NPM Packages
// File modules
const fs    = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
// const add   = require('./utils')
const notes = require('./notes')

// console.log(add(5, 7))
// console.log(chalk.inverse.blue('test'))
// console.log(chalk.green('Success!'))
// console.log(validator.isEmail('arvinalipio@dxc.com'))
// console.log(notes())
// console.log(process.argv)

// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding note')
// } else if (command === 'remove') {
//     console.log('Removing note')
// }


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Removing a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {  
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)
