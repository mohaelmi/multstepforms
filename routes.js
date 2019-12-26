const express = require('express');
const router = express.Router();
const members = require('./Members')

//get all members
router.get('/', function (req, res) {
    return res.send( { members } );
   });
   
   //get single member
   router.get('/:id', function (req, res) {
       const found = members.some( member => member.id === parseInt(req.params.id))
       if(found) {
           res.json(members.filter( member => member.id === parseInt(req.params.id)))
       }else {
           res.status(400).json({ msg: 'invalid number' })
       }
      });
      
   //create member
   router.post('/', function (req, res) {
       newUser = {
           id: req.body.id,
           firstname: req.body.firstname,
           lastname: req.body.lastname,
           email: req.body.email
       }
   
       if(!newUser.firstname || !newUser.lastname || !newUser.email){
           return res.status(400).json('please fill correctly')
       }
       members.push(newUser)
       console.log(newUser)
       res.json('seccussfuly added')
     })

     module.exports = router