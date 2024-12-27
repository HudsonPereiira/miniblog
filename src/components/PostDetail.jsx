import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({post}) => {
    console.log(post)
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title}/>
      <h3>{post.title}</h3>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div>
      {post.tagsArray.map((tag, index) => (
  <p key={`${tag}-${index}`}>  {/* Concatenando tag e índice para garantir chaves únicas */}
    <span>#</span>
    {tag}
  </p>
        ))}
      </div>
     
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
