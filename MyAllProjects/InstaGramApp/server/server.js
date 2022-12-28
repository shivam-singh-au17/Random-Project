const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');

// this is a function in which i have to write the path of .env file in key:value pair
dotenv.config({ path: './.env' });
const connect = require('./config/db');

const PORT = process.env.PORT || 5000;

// UserData Module
const UsersData = require('./model/userSchema.model');
const PostsData = require('./model/postSchema.model');
const StoryData = require('./model/storySchema.model');
const HastagData = require('./model/hashtagSchema.model');

//ChatData modules
const ConversationData = require('./model/conversationSchema.model');
const MessageData = require('./model/messageSchema.model');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(require('./controllers/auth'));
app.use(require('./controllers/users'));
app.use(require('./controllers/posts'));
app.use(require('./controllers/conversation'));
app.use(require('./controllers/message'));
app.use(require('./controllers/story'));
app.use(require('./controllers/hashtags'));
app.use(require('./controllers/notifications'));

async function start() {
  // Mongoose connection
  await connect();

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}
start();


