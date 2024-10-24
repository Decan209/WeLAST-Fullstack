import React from "react";
import { CommitInfo } from "../types/Repository";

const RepoDetail: React.FC<CommitInfo> = ({ date, author, message }) => {
  return (
    <div className="repo-detail max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2>Commit Information</h2>
      <p><strong>Date:</strong> {new Date(date).toLocaleString()}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

export default RepoDetail;
