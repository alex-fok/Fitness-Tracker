const db = require('../models');
const router = require('express').Router();

router.get('/workouts', async (req, res) => {
  const workouts = await db.Workout.aggregate([
    { $sort: { day: 1, _id: 1 } },
    { $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }}
  ]);
  res.json(workouts);
});

router.put('/workouts/:id', async (req, res) => {
  const workoutObj = await db.Workout.findOne({ _id: req.params.id });
  if (workoutObj) {
    workoutObj.exercises.push(req.body);
    await workoutObj.save();
    res.json(workoutObj);
  } else {
    console.log("No result found")
  }  
});

router.post('/workouts', async (req, res) => {
  const workoutObj = await db.Workout.create(req.body);
  console.log(req.body);
  res.json(workoutObj);
});

router.get('/workouts/range', async (req, res) => {
  const workouts = await db.Workout.aggregate([
    { $sort: { day: -1, _id: 1 } },
    { $limit: 7 },
    { $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }}
  ]);
  res.json(workouts);
});

module.exports = router;