const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Cred = require('../models/Cred');

// @route   GET api/creds
// @desc    Get all users creds
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const creds = await Cred.find({ user: req.user.id }).sort({ date: -1 });
    res.json(creds);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Add new cred
// @access  Private
router.post('/', [ auth, [
  check('title', 'Title is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const  { title, login, password, description,  type } = req.body;

  try {
    const newCred = new Cred({
      title,
      login,
      password,
      type,
      description,
      user : req.user.id 
    });

    const cred = await newCred.save();

    res.json(cred);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/auth/:id
// @desc    Update cred
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const  { title, login, password, description,  type } = req.body;

  // Build cred object
  const credFields = {};
    if(title) credFields.title = title;
    if(login) credFields.login = login;
    if(password) credFields.password = password;
    if(description) credFields.description = description;
    if(type) credFields.type = type;

    try {
      let cred = await Cred.findById(req.params.id);

      if(!cred) {
        return res.status(404).json({ msg: 'Cred is not found' });
      }

      // Make sure user own cred
      if(cred.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }

      cred = await Cred.findByIdAndUpdate(req.params.id, { $set: credFields }, { new: true });

      res.json(cred);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
});

// @route   DELETE api/auth/:id
// @desc    Remove cred
// @access  Private
router.delete('/:id', auth, async (req, res) => {

    try {
      let cred = await Cred.findById(req.params.id);

      if(!cred) {
        return res.status(404).json({ msg: 'Cred is not found' });
      }

      // Make sure user own cred
      if(cred.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }

      await Cred.findByIdAndDelete(req.params.id);

      res.json({ msg: 'Cred removed' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
});

module.exports = router;