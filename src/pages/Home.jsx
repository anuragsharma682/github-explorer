import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Empty from "../components/Empty";
import useDebounce from "../hooks/useDebounce";
import useFetchUsers from "../hooks/useFetchUsers";

export default function Home({ onSelectUser }) {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 400);
  const { data, loading, error } = useFetchUsers(debounced);

  return (
    <div className="container">
      <SearchBar value={search} onChange={setSearch} />

      {loading && <Loader />}
      {error && <Error />}
      {!loading && data.length === 0 && <Empty />}

      {data.map((user) => (
      <UserCard key={user.id} user={user} onClick={onSelectUser} />
    ))}
    </div>
  );
}