var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  summary: {
    type: String,
    default: '',
    trim: true,
    required: 'Summary required'

  },
  author: {
    type: String,
    default: '',
    trim: true,
    required: 'Author required'
  },
  link: {
    type: String,
    default: '',
    trim: true
  },
  postedBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
}

var Article = mongoose.model('Article', ArticleSchema, 'articles');
module.exports = Article;
