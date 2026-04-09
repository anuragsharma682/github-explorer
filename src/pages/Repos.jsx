import { useState } from "react";
import useFetchRepos from "../hooks/useFetchRepos";
import RepoCard from "../components/RepoCard";
import Loader from "../components/Loader";

export default function Repos({ user, goBack }) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [language, setLanguage] = useState("");

  const { repos, loading } = useFetchRepos(user, page);

  // filter
  let filtered = language
    ? repos.filter((r) => r.language === language)
    : repos;

  // sort
  filtered = [...filtered].sort((a, b) => {
    if (sort === "stars") return b.stargazers_count - a.stargazers_count;
    if (sort === "forks") return b.forks_count - a.forks_count;
    return 0;
  });

  // unique languages
  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean))];

  return (
    <div className="container">
      <button onClick={goBack}>⬅ Back</button>

      <div className="controls">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
        </select>

        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">All Languages</option>
          {languages.map((lang, i) => (
            <option key={i}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filtered.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      {loading && <Loader />}

      <button className="load-more" onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}