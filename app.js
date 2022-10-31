 const express = require('express');
 const { ObjectId } = require('mongodb');
 const { connectToDb, getDb } = require('./db')

const app = express();

// db connection
 let db

connectToDb((err) => {
    if(!err) {
        app.listen(3000, () => {
            console.log('port is listening on...')
        })
        db = getDb()
    }
})
 
//routes

app.get('/books', (req, res) => {

    let books = []

    db.collection('books')
        .find()
        .sort({ author: 1 })
        .forEach(books => books.push(books))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: 'could not fetch document..'})
        })

})

// //finding a single book
// app.get('/books/:id', (req, res) => {
//     if(Object.isValid(req.params.id)) {
//         db.collection('books')
//     .findOne({_id: ObjectId(req.params.id)})
//     .then(doc => {
//         res.status(200).json(doc)
//     })
//     .catch(err => {
//         res.status(500).json({error: 'could not fetch document..'})
//     })
//     } else {
//         res.status(500).json({error: 'is not a valid file'})
//     }
    
// })