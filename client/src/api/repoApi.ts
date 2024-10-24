const API_URL = 'http://localhost:3000'; 

export const fetchRepos = async () => {
  const response = await fetch(`${API_URL}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};

export const fetchRepoDetails = async (owner: string, repoName: string) => {
    const response = await fetch(`${API_URL}/repos/${owner}/commit/${repoName}`);
    if (!response.ok) {
      throw new Error('Failed to fetch repository details');
    }
    return response.json();
  };
