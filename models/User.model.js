const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username é obrigatório'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  telephone: {
    type: Number,
     unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    trim: true,
    lowercase: true
  },

  passwordHash: {
    type: String,
    required: true
  },

  likes: {
    type: [ Schema.Types.ObjectId ],
    ref: 'Like'
  },
  role: {
    type: String,
    enum: ['colaborador', 'admin'],
    lowercase: true
  },
  avatarUrl: {
    type: String,
  }
}, { timestamps: true });

module.exports = model('User', userSchema);