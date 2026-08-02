const express=require('express')
const journalController=require('../controller/journal.controller')
const router=express.Router();
const { authCheck } = require('../middleware/auth.middleware');
router.post('/',authCheck,journalController.createJournal)
router.get('/',authCheck,journalController.getMyJournals)
router.get('/:id',authCheck,journalController.getJournalById)
router.delete('/:id',authCheck,journalController.deleteJournal)
router.put('/:id', authCheck, journalController.updateJournal);
module.exports=router;