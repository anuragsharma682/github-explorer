import { saveBookmark } from "../utils/localStorage";

export default function RepoCard({ repo }) {
  return (
    <div className="card">
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>

      <div className="meta">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>💻 {repo.language}</span>
      </div>

      <p>Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>

      <a href={repo.html_url} target="_blank">View Repo</a>

      <button onClick={() => saveBookmark(repo)}>Bookmark</button>
    </div>
  );
}