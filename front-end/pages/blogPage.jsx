import { useRouter } from "next/router";
import { useNewsDatasContext } from "../context/newsDatasContext";
import { Avatar } from "../components/index";
import css from '../styles/BlogPage.module.css';
import axios from "axios";
const BlogPage = () => {
  const router = useRouter();
  const { newsDatas, setUserInterestedBlog } = useNewsDatasContext();
  
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
                        // console.log
                        await axios.delete(
                          `http://localhost:8000/users/delete/${blogData.id}`,
                          blogData,
                          // {
                          // id: "60d21b4667d0d8992e610c85",
                          // image:
                          // "https://ichef.bbci.co.uk/news/976/cpsprodpb/14E02/production/_110660558_hi059476725.jpg",
                          // likes: 43,
                          // tags: ["animal", "dog", "golden retriever"],
                          // text: "adult Labrador retriever",
                          // publishDate: "2020-05-24T14:53:17.598Z",
                          // owner: {
                          // id: "60d0fe4f5311236168a109ca",
                          // title: "ms",
                          // firstName: "Sara",
                          // lastName: "Andersen",
                          // picture:
                          // "https://randomuser.me/api/portraits/women/58.jpg",
                          // },
                          // },
                          {
                            header: {
                              "Content-type": "application/json; charset=UTF-8",
                              "app-id": "6336455296396a087298080d",
                            },
                          }
                        );
                    }}>Hasah</button>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {/* <button>hasah</button> */}
      </div>
    );
}
export default BlogPage
