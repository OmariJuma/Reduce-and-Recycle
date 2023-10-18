const { signUpCtrl, loginCtrl } = require('../controllers/index');
const router = require('express').Router();

router.post('/sign-up', signUpCtrl);
router.post('/log-in', loginCtrl);

module.exports = router;