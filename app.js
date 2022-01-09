const yargs = require('yargs')
const { writeQuestions, saveContact, listContact, detailContact, deleteContact } = require('./contact')

// contact aplication with Yargs Command

// add contact
yargs.command({
    command: 'add',
    describe: 'Add a new contact',
    builder: {
        name: {
            describe: 'Name of the contact',
            demandOption: true,
            type: 'string'
        },
        phoneNum: {
            describe: 'Phone number of the contact',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email of the contact',
            demandOption: false,
            type: 'string'
        }
    },
    handler( argv ) {
        saveContact( argv.name, argv.phoneNum, argv.email )
    }
}).demandCommand()

// show all list contact
yargs.command({
    command: 'list',
    describe: 'List all contacts',
    handler() {
        listContact()
    }
}).demandCommand()

// detail contact
yargs.command({
    command: 'detail',
    describe: 'Show detail of contact by name',
    builder: {
        name: {
            describe: 'Name of the contact',
            demandOption: true,
            type: 'string'
        },
    },
    handler( argv ) {
        detailContact( argv.name )
    }
}).demandCommand()

// delete contact
yargs.command({
    command: 'delete',
    describe: 'Delete contact by name',
    builder: {
        name: {
            describe: 'Name of the contact',
            demandOption: true,
            type: 'string'
        },
    },
    handler( argv ) {
        deleteContact( argv.name )
    }
}).demandCommand()

yargs.parse()

// contact aplication with CLI questions
// const main = async () => {
//     const name = await writeQuestions('Name : ')
//     const phoneNum = await writeQuestions('Phone Number : ')
//     const email = await writeQuestions('Email : ')

//     saveContact( name, phoneNum, email )
// }

// main()