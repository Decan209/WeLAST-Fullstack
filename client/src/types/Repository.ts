export interface Repo {
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
  
export interface CommitInfo {
    date: string;
    author: string;
    message: string;
  }