export default function UserCard({ user, onClick }) {
  return (
    <div className="card user-card" onClick={() => onClick(user.login)}>
      <img src={user.avatar_url} width="50" />
      <p>{user.login}</p>
    </div>
  );
}