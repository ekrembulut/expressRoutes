const express = require('express');

const routes = express.Router();

const Posts = require('../models/Posts');

//Send All Posts

routes.get('/', async(req, res) => {
    try {
        const post = await Posts.find({});
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
})



routes.get('/get-post', async(req, res) => {
    try {
        const post = await Posts.find({id :req.body.id});
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
})
//Save Posts

routes.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        content: req.body.content,
        id: req.body.id,
    })

    try {
        const savedPosts = await post.save();
        res.json(savedPosts);
    }
    catch (err) {
        res.json({ message: err });
    }
   },
)



routes.post('/delete-post', async (req, res) => {
    try {
        const removedPost = await Posts.remove({ title: req.body.title });
        res.json(removedPost);
    }
    catch (err) {
        res.json({ message: err });
    }
})

routes.post('/update-post', async (req, res) => {
    try {
        const updatedPost = await Posts.updateOne({ id: req.body.id }, { $set: { title: req.body.title } });
        res.json(updatedPost);
    }
    catch (err) {
        res.json({ message: err });
    }
}
)


module.exports = routes;