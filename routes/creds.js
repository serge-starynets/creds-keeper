const express = require('express');
const router = express.Router();

// @route   GET api/creds
// @desc    Get all users creds
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all creds');
});

// @route   POST api/auth
// @desc    Add new cred
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a cred');
});

// @route   PUT api/auth/:id
// @desc    Update cred
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update cred');
});

// @route   DELETE api/auth/:id
// @desc    Remove cred
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete cred');
});

module.exports = router;