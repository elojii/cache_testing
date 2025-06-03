async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // ensures server-side fetch on every request
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return data.slice(0, 5); // Limit to 5 posts
}


export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-3 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}