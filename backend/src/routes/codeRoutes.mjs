import express from 'express';
import { contestSubmit,submit,getProblem,getAllProblem,setProblem,executeCode, testEndpoint ,createContest, getAllContest, getContest} from '../controllers/codeController.mjs';

const router = express.Router();

router.get('/test', testEndpoint);
router.post('/run', executeCode);
router.post('/setproblem', setProblem);
router.post('/problem/submit/:problemID', submit);
router.get('/problem', getAllProblem);
router.get('/problem/:problemID', getProblem);
router.post('/create-contest',createContest);
router.get('/contests',getAllContest);
router.get('/contest/:id',getContest);
router.post('/contests/:contestId/problems/:problemID/submit',contestSubmit);

export default router;
