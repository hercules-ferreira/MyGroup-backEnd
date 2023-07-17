const router = require('express').Router();



// modelo
const Like = require('../models/Like.model');

// middlewares
const { isAdmin } = require('../middlewares/role.middleware');





//
//

// 
// 

// rotas
// Crud -> Create
router.post('/', async (req, res, next) => {
  const { idCreator, title, description, rating } = req.body;
  try {
    if(!title) {
      res.status(400).json({message: "Título é obrigatório!"});
      return;
    };
    // await Like.create(req.body);
    const newLikeFromDB = await Like.create({idCreator, title, description, rating });
    res.status(200).json(newLikeFromDB);
  } catch (error) {
    next(error);
  }
})

// cRud -> Read
router.get('/', async (req, res, next) => {
  const { page, limit } = req.query;
  try {
    const likesFromDB = await Like.find().limit(limit).skip(limit * (page - 1));
    res.status(200).json(likesFromDB);
  } catch (error) {
    next(error);
  }
})

router.get('/:likeId', async (req, res, next) => {
  const { likeId } = req.params;
  try {
    const likeFromDB = await Like.findById(likeId);
    res.status(200).json(likeFromDB);
  } catch (error) {
    next(error);
  }
})

  // crUd -> Update
  router.put('/:likeId', async (req, res, next) => {
  const { likeId } = req.params;
  try {
    const likeFromDB = await Like.findByIdAndUpdate(likeId, req.body, {new: true});
    res.status(200).json(likeFromDB);
  } catch (error) {
    next(error);
  }
})

// cruD -> Delete;
router.delete('/:likeId', async (req, res, next) => {
  const { likeId } = req.params;
  try{
    await Like.findByIdAndRemove(likeId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
})

// exportando rotas
module.exports = router;
