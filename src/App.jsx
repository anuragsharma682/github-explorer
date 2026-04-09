import { useState } from "react";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <ThemeToggle dark={dark} setDark={setDark} />

      {!selectedUser ? (
        <Home onSelectUser={setSelectedUser} />
      ) : (
        <Repos user={selectedUser} goBack={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;