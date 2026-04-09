export const saveBookmark = (repo) => {
  const existing = JSON.parse(localStorage.getItem("bookmarks")) || [];

  // duplicate avoid
  const already = existing.find((item) => item.id === repo.id);
  if (already) return;

  localStorage.setItem("bookmarks", JSON.stringify([...existing, repo]));
};

export const getBookmarks = () => {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
};