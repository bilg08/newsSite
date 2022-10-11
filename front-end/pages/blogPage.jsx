import { useRouter } from "next/router";
import { useNewsDatasContext } from "../context/newsDatasContext";
import { Avatar } from "../components/index";
import css from '../styles/BlogPage.module.css';
import axios from "axios";
import { useLoadingContext } from "../context";
import { Spinner } from "../components/spinner/spinner";


const instance = axios.create({
  baseURL: `http://localhost:8000/users`,
  timeout: 1000,
});

const BlogPage = () => {
  const router = useRouter();
  const { newsDatas, setUserInterestedBlog } = useNewsDatasContext();
  const { setIsLoading } = useLoadingContext();
  return (
      <div id={css.BlogPageContainer}>
        <div className={css.BlogPageMain}>
          <div className={css.BlogPageMainHeader}>
            <h1>Blog Posts</h1>
            <p style={{ fontWeight: `800`, fontSize: `18px` }}>
              Our latest updates and blogs about managing your team
            </p>
          </div>

          <div className={css.BlogsContainer}>
            {newsDatas?.length<0? <p>loading</p>: (
              newsDatas?.map((blogData) => {
                return (
                  <div className={css.Blog} key={blogData.id}>
                    <img
                      onClick={() => {
                        setUserInterestedBlog(blogData);
                        router.push("/blogDetail");
                      }}
                      src={blogData.image}
                      style={{
                        objectFit: "cover",
                        width: `100%`,
                        height: `50%`,
                        borderTopLeftRadius: `30px`,
                        borderTopRightRadius: `30px`,
                      }}
                    />
                    <h3 style={{ fontSize: "24px" }}>{blogData.BlogHeader}</h3>
                    <h2 style={{ fontSize: "14h3x", fontWeight: "800" }}>
                      {blogData.text}
                    </h2>
                    <div className={css.BlogFooter}>
                      <Avatar imgSrc={blogData.owner.picture} />
                      <p>{blogData.owner.firstName}</p>
                      <p>{blogData.publishDate}</p>
                    </div>
                    <button
                      onClick={async () => {
                           try {
                             await axios.delete(
                               `http://localhost:8000/users/delete/${blogData.id}`
                             );
                           } catch (error) {
                            
                           }
                       
                    }}>Hasah</button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
}
export default BlogPage
