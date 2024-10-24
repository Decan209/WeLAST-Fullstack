import { Router } from 'express';
import { getRepositories, getDetailRepositorie } from '../controllers/RepoController';

const router = Router();

router.get('/', getRepositories);
router.get('/:owner/commit/:repoName', getDetailRepositorie);

export default router;
