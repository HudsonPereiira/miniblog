import styles from "./Search.module.css";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useQuery } from "../../Hooks/useQuery";
import { Link } from "react-router-dom";

import React from "react";
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p styles={styles.nopost}>Não foram encontradas postagens a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts &&
          posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Search;
