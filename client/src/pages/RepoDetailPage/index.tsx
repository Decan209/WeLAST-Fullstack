import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RepoDetail from "../../components/RepoDetail";
import { fetchRepoDetails } from '../../api/repoApi';
import Loading from "../../components/Loading";
import { CommitInfo } from "../../types/Repository";


const RepoDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const repoDetail = location.state?.repoDetail;

  const [commitInfo, setCommitInfo] = useState<CommitInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  
  useEffect(() => {
    const getFullRepoDetail = async () => {
      if (repoDetail && repoDetail.owner?.login && repoDetail.name) {
        setIsLoading(true); 
        try {
          const data = await fetchRepoDetails(repoDetail.owner.login, repoDetail.name);
          setCommitInfo(data);
          console.log(data);
        } catch (error) {
          console.error('Failed to fetch full repository details:', error);
        } finally {
          setIsLoading(false); 
        }
      }
    };

    getFullRepoDetail();  
  }, [repoDetail]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="mt-10">
    {isLoading ? (  
        <Loading />
    ) : commitInfo ? (
      <>
        <RepoDetail {...commitInfo} />
        <div className="flex justify-center mt-4">
          <button
            className="p-2 bg-gray-500 text-white rounded"
            onClick={handleBack}
          >
            Back to List
          </button>
        </div>
      </>
    ) : (
      <div className="repo-detail max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        Repository detail not found.
      </div>
    )}
  </div>
  );
};

export default RepoDetailPage;
