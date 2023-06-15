import express from 'express';
import Quiz from '../models/quiz.js';

const router = express.Router();



router.post('/', async (req, res) => {
  try {
    
    const quiz = await Quiz.create(req.body);
    console.log('hogya')
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/active', async (req, res) => {
  try {
    const now = new Date();
    const quiz = await Quiz.findOne({
      startDate: { $lte: now },
      endDate: { $gte: now },
    });
    res.json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/:id/result', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    if (quiz.status !== 'finished') {
      return res.status(400).json({ error: 'Quiz is not finished yet' });
    }
    res.json({ result: quiz.rightAnswer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/all', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router
