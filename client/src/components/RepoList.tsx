import React from 'react';
import { Repo } from '../types/Repository';

interface RepoListProps {
  repos: Repo[];
  onRepoClick: (repoName: string) => void;
}

const RepoList: React.FC<RepoListProps> = ({ repos, onRepoClick }) => {

  return (
    <div className="repo-list max-w-4xl mx-auto p-4">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="repo-item cursor-pointer p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-300"
          onClick={() => onRepoClick(repo.name)}
        >
          <h2 className="font-bold text-xl text-blue-600 hover:underline">{repo.name}</h2>
          <p className="text-gray-700">{repo.description || 'No description available'}</p>
          <p className="text-sm text-gray-500">Language: {repo.language || 'N/A'}</p>
          <p className="text-sm text-gray-500">Forks: {repo.forks}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
