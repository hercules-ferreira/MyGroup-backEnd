const router = require('express').Router();

const { isAuthenticated } = require('../middlewares/jwt.middleware');
const uploadImage = require('../middlewares/cloudinary.middleware');

const User = require('../models/User.model');


// middlewares
const { isAdmin } = require('../middlewares/role.middleware');


// List users
router.get('/', async (req, res, next) => {
  try {
    const usersFromDB = await User.find();
    res.status(200).json(usersFromDB);
  } catch (error) {
    next(error);
  }
})

// adicionar like ao usuário
router.post('/add-like/:likeId', isAuthenticated, async (req, res, next) => {
  const { likeId } = req.params;
  const userId = req.payload._id;
  try {
    const userFromDB = await User.findByIdAndUpdate(userId, { $push: { likes: likeId } }, { new: true });
    const { _id, username, likes } = userFromDB; // para não enviar o passwordHash!!
    res.status(200).json({ _id, username, likes });
  } catch (error) {
    next(error);
  }
});

router.get('/profile', async (req, res, next) => {
  const userId = req.payload._id;
  try {
    const userFromDB = await User.findById(userId, { passwordHash: 0 });
    res.json(userFromDB);
  } catch (error) {
    next(error)
  }
})


// listar usuário com as informações dos likes
router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const userFromDB = await User.findById(userId, {
      createdAt: 0, updatedAt: 0, __v: 0
    }).populate({
      path: 'likes',
      select: '-createdAt -updatedAt -__v'
    });
    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
});

router.put('/image', uploadImage.single('profileImage'), async (req, res, next) => {
  const userId = req.payload._id;
  console.log(req.body)
  try {
    const { path } = req.file;
    const userFromDB = await User.findByIdAndUpdate(userId, { avatarUrl: path }, { new: true });
    const { username, avatarUrl } = userFromDB;
    res.json({ message: 'Upload Success!', user: { username, avatarUrl }});
  } catch (error) {
    next(error); 
  }
});


// crUd -> Update
router.put('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const userFromDB = await User.findByIdAndUpdate(userId, req.body, {new: true});
    res.status(200).json(userFromDB);
  } catch (error) {
    next(error);
  }
})



// cruD -> Delete;
router.delete('/:userId', isAdmin, async (req, res, next) => {
  const { userId } = req.params;
  try{
    await User.findByIdAndRemove(userId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
})

module.exports = router;
