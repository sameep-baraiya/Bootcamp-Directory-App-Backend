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

// Re-rout into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
router.route('/:id/photo').put(bootcampPhotoUpload);
router.route('/').get(getBootcamps).post(createBoootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
