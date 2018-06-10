// initial dummy data for articles and user

var mongoose = require('mongoose');
var Article = require('./models/Article.js');
var User = require('./models/User.js');

Article.find(function(err, data) {
  if (err) {
    console.log("Something went wrong!");
  }else{
    if(data.length == 0){
      var user = {
          email: 'abc@def.com',
          password: '12345678',
          name: 'Test User',
          username: 'testuser',
          provider: 'local'
      };
      user = new User(user);
      user.save();
      
      var initial = [{
          title: "JavaScript async/await: The Good Part, Pitfalls and How to Use",
          summary: "The async/await introduced by ES7 is a fantastic improvement in asynchronous programming with JavaScript.",
          author: "Charlee Li",
          link: "https://hackernoon.com/javascript-async-await-the-good-part-pitfalls-and-how-to-use-9b759ca21cda",
          postedBy:user
        },
        {
          title: "11 Javascript Animation Libraries For 2018",
          summary: "Some of the finest JS-CSS animation libraries around.",
          author: "Jonathan Saring",
          link: "https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59",
          postedBy:user
        },
        {
          title: "A Guide to CSS Animation",
          summary: "Hey! 👋 So you’re interested in making things move on your websites and in your apps? This guide should help you out 👍",
          author: "Jhey Tompkins",
          link: "https://codeburst.io/a-guide-to-css-animation-part-1-8777f5beb1f8",
          postedBy:user
        }
      ]
      
      initial.forEach(function(article) {
          var articles = new Article(article);
          articles.save(function(err,data){
            if(err){
              throw err;
            }
            else{
            }
          });
      });
    }
  }
})
