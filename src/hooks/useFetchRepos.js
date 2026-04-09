import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchRepos(username, page) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      );

      setRepos((prev) => [...prev, ...res.data]);
      setLoading(false);
    };

    fetchRepos();
  }, [username, page]);

  return { repos, loading };
}