# Simple Contact App with Node.js

Create a simple Contact App with Node.js.

<hr/>

## Feature

- This application have 2 ways of use:
    - Run automaticly question on `cmd` when add new contact
    - Run with custom command
- Auto create folder `./data` if not exist.
- Auto create file `./data/contact.json` if not exist.

<hr/>

## Getting Started

1. Download this repository or clone this repository.

```bash
    $ git clone https://github.com/nuflakbrr/contact-app.git
```

2. Run `npm install`.

```bash
    $ npm install
```

<hr/>

## Commands

`--help`, to show all commands.

```bash
    $ node app --help
```

`add`, to add new contact. In this case, for email is optional to input.

```bash
    $ node app add --name=[name] --phoneNum=[phoneNum] --email[email]
```

`list`, to show all contact.

```bash
    $ node app list
```

`detail`, to show detail of contact by name.

```bash
    $ node app detail --name=[name]
```

`delete`, to delete a contact by name.

```bash
    $ node app delete --name=[name]
```

<hr/>

## Authors

Contributors names and contact info

Naufal Akbar Nugroho  
[@kbrnugroho](https://instagram.com/kbrnugroho)
