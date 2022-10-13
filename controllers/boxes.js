const Box = require('../models/box')

module.exports = {
    create,
    index,
    show,
    delete: deletePost,
    update,
    edit
}

function create(req, res) {  
    Box.create(req.body, function(err, box){
        if(err) {
            console.log(err)
            return res.redirect('/boxes')
    }
    console.log(box)
    res.redirect('/boxes')
    })
}

function index(req, res) {
    Box.find({}, function(err, boxes) {
        console.log(boxes)
        if(err) {
            console.log(err)
            res.render('boxes', { title: 'Home Page', box: [] })
        }
        res.render('boxes', { title: 'Home Page', boxes })

    })
}

function show(req, res) {
    Box.findById(req.params.id, function(err, box) {
        console.log(box)
        res.render('boxes')
    })
}

async function deletePost(req, res) {
    let box
    try {
        box = await Box.findById(req.params.id)
        await box.remove()
        res.redirect('/boxes')
    } catch {
        if (box === null) {
            res.redirect('/')
        } else {
            res.redirect('/boxes')
        }
    }   
}

async function edit(req, res) {
    try {
        const box = await Box.findById(req.params.id)
        res.render('boxes/edit', { box: box })
    }
    catch {
        res.redirect('/boxes')
    }
}

async function update(req, res) {
    let box
    try {
        box = await Box.findById(req.params.id)
        box.content = req.body.content
        await box.save()
        res.redirect('/boxes')
    } catch {
        if (box === null) {
            res.redirect('/boxes/edit')
        }
    }
}