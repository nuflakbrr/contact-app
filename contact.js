const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// make a function directory path if not exist
const dirPath = './data'
if(!fs.existsSync( dirPath )) {
    fs.mkdirSync( dirPath )
}

// make a function file path if not exist
const filePath = './data/contact.json'
if(!fs.existsSync( filePath )) {
    fs.writeFileSync( filePath, '[]', 'utf-8' )
}

// make a function to create a question
// const writeQuestions = ( question ) => {
//     return new Promise((resolve, reject) => {
//         rl.question( question, ( answer ) => {
//             resolve( answer )
//         })
//     })
// }

// make a function to load contact
const loadContact = () => {
    const fileBuffer = fs.readFileSync( filePath, 'utf-8' )
    const file = JSON.parse( fileBuffer )
    return file
}

// make a function to save contact
const saveContact = ( name, phoneNum, email ) => {
    const contact = { name, phoneNum, email }
    const load = loadContact()

    // check the name of contact is exist or not
    const isExist = load.find( ( contact ) => contact.name === name)

    if( isExist ) {
        console.log(chalk.red.inverse.bold('The name of contact is exist, please enter name again'))
        return false
    }

    // valodate email
    if( email && !validator.isEmail( email ) ) {
        console.log(chalk.red.inverse.bold('The email is not valid, please enter email again'))
        return false
    }

    // validate phone number
    if( phoneNum && !validator.isMobilePhone( phoneNum, 'id-ID' ) ) {
        console.log(chalk.red.inverse.bold('The phone number is not valid, please enter phone number again'))
        return false
    }

    load.push( contact )

    fs.writeFileSync( filePath, JSON.stringify( load ))
    console.log(chalk.green.inverse.bold('Contact successfully added!'))
    // rl.close()
}

// make a function to list contact
const listContact = () => {
    const load = loadContact()

    console.log(chalk.blue.inverse.bold('List contacts :'))
    load.forEach( ( contact, index ) => {
        console.log(`${index + 1}. ${contact.name} - ${contact.phoneNum}`)
    })
}

// make a function to detail contact
const detailContact = ( name ) => {
    const load = loadContact()

    const contact = load.find(( contact ) => contact.name.toLowerCase() === name.toLowerCase())
    if ( !contact ) {
        console.log(chalk.red.inverse.bold(`Sorry, ${name} is not found, try another name!`))
        return false
    }

    console.log(chalk.blue.inverse.bold(`Detail contact of ${contact.name} :`))
    console.log(contact.phoneNum)
    if ( contact.email ) {
        console.log(contact.email)
    }
}

// make a function to delete contact
const deleteContact = ( name ) => {
    const load = loadContact()

    const replaceContact = load.filter(( contact ) => contact.name.toLowerCase() !== name.toLowerCase())

    if ( replaceContact.length === load.length ) {
        console.log(chalk.red.inverse.bold(`Sorry, ${name} is not found, try another name!`))
        return false
    }

    fs.writeFileSync( filePath, JSON.stringify( replaceContact ))
    console.log(chalk.green.inverse.bold(`Contact by ${name} successfully deleted!`))
}

// export a function to use in app.js
module.exports = { 
    // writeQuestions, 
    saveContact,
    listContact,
    detailContact,
    deleteContact
}