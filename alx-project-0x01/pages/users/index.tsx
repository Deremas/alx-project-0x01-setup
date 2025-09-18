import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Users</h1>

        {/* Grid for all user cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts, // ensure this matches the prop expected by your Users component
    },
  };
}

export default Users;
