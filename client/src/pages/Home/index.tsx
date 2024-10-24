import React, { useEffect, useState } from 'react';
import RepoList from '../../components/RepoList';
import LanguageFilter from '../../components/LanguageFilter';
import { fetchRepos } from '../../api/repoApi';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading'; 
import { Repo } from '../../types/Repository';


const Home: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getRepos = async () => {
      setIsLoading(true); 
      try {
        const data = await fetchRepos();
        setRepos(data);
        setFilteredRepos(data);

        const uniqueLanguages = [...new Set(data.map((repo: Repo) => repo.language).filter(Boolean))] as string[];
        setLanguages(uniqueLanguages);
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    getRepos();
  }, []);

  const handleFilterChange = (language: string) => {
    if (language === '') {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(repos.filter(repo => repo.language === language));
    }
  };

  const handleRepoClick = (repoName: string) => {
    const selectedRepo = repos.find(repo => repo.name === repoName);
    if (selectedRepo) {
      navigate(`/repos/${repoName}`, { state: { repoDetail: selectedRepo } });
    }
  };

  return (
    <div className='mt-5'>
      {isLoading ? (
        <Loading /> 
      ) : (
        <>
          <LanguageFilter languages={languages} onFilterChange={handleFilterChange} />
          <RepoList repos={filteredRepos} onRepoClick={handleRepoClick} />
        </>
      )}
    </div>
  );
};

export default Home;
