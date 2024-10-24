import axios from 'axios';

export interface CommitInfo {
  date: string;
  author: string;
  message: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  forks: number;
  owner: {
    login: string;
    html_url: string;
  };
}

const GITHUB_API_URL = 'https://api.github.com/users/freeCodeCamp/repos';
const API_URL_COMMIT = 'https://api.github.com/repos';

export const fetchRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await axios.get(GITHUB_API_URL);
    const repos = response.data;

    const filteredRepos: Repository[] = repos
      .filter((repo: any) => !repo.fork && repo.forks > 5)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        forks: repo.forks,
        owner: {
          login: repo.owner.login,
          html_url: repo.owner.html_url
        }
      }));

    return filteredRepos;

  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
};

export const fetchCommitRepositorie = async (owner: string, repoName: string): Promise<CommitInfo> => {
  try {
    const response = await axios.get(`${API_URL_COMMIT}/${owner}/${repoName}/commits`);
    const commits = response.data;

    if (commits.length === 0) {
      throw new Error('No commits found');
    }

    const firstCommit: CommitInfo = {
      date: commits[0].commit.author.date,
      author: commits[0].commit.author.name,
      message: commits[0].commit.message,
    };

    return firstCommit;

  } catch (error) {
    throw new Error('Failed to fetch repository commits');
  }
};
