import { Request, Response } from 'express';
import { fetchRepositories, fetchCommitRepositorie } from '../services/RepoService';

export const getRepositories = async (req: Request, res: Response) => {
  try {
    const repositories = await fetchRepositories();
    res.status(200).json(repositories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
};

export const getDetailRepositorie = async (req: Request, res: Response) => {
    try {
      const repositories = await fetchCommitRepositorie(req.params.owner, req.params.repoName);
      res.status(200).json(repositories);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch commit' });
    }
  };
