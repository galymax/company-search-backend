import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // return list of companies with name and specialities
  res.json([{
    name: 'Company 1',
    specialities: ['speciality 1', 'speciality 2']
  }, {
    name: 'Company 2',
    specialities: ['speciality 1', 'speciality 2']
  }]);
});

export default router;
