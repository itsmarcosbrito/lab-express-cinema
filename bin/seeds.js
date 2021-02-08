const mongoose = require('mongoose');
const Book = require('../models/movie.model');
const DB_NAME = 'cinema-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true