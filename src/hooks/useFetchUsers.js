import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchUsers(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.github.com/search/users?q=${query}`
        );
        setData(res.data.items);
        setError(null);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [query]);

  return { data, loading, error };
}