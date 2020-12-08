const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBoootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

// router.get('/', (req, res) => {
//     // res
//     //     .status(200)
//     //     .json({ success: true, msg: 'Show all bootcamps' });
//     // res.sendStatus(400);
//     // res.json({ name: 'Sameep' });
// });

const router = express.Router();

router.route('/').get(getBootcamps).post(createBoootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
