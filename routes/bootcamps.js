const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBoootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResult = require('../middleware/advancedResult');

// Include other resource router
const courseRouter = require('./courses');

// router.get('/', (req, res) => {
//     // res
//     //     .status(200)
//     //     .json({ success: true, msg: 'Show all bootcamps' });
//     // res.sendStatus(400);
//     // res.json({ name: 'Sameep' });
// });

const router = express.Router();

const { protect } = require('../middleware/auth');

// Re-rout into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/:id/photo').put(protect, bootcampPhotoUpload);
router
  .route('/')
  .get(advancedResult(Bootcamp, 'courses'), getBootcamps)
  .post(protect, createBoootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
