import { useNewsDatasContext } from "../context/newsDatasContext";
import { useGetDatasHook } from "../Hook/getDatasHook";
import css from '../styles/blogDetail.module.css';
const BlogDetails = () => {
    const { userInterestedBlog } = useNewsDatasContext();
    console.log(userInterestedBlog);
    return (
      <div className={css.userInterestedBlogContainer}>
        <h1>{userInterestedBlog.text}</h1>
        <div>
          <img src={userInterestedBlog.owner.picture} />
        </div>
        <img src={userInterestedBlog.image} />
      </div>
    );
}
export default BlogDetails