import {Header} from "../components";
import css from "../styles/blogPage.module.css";
import BlogDatas from "../asset/news.json";
export const BlogPage = () => {
    return (
      <div id={css.BlogPageContainer}>
        <Header />
        <div className={css.BlogPageMain}>
          <div className={css.BlogPageMainHeader}>
            <h1>Blog Posts</h1>
            <p style={{ fontWeight: `800`, fontSize: `18px` }}>
              Our latest updates and blogs about managing your team
            </p>
          </div>
                
          <div className={css.BlogsContainer}>
            {BlogDatas.map((blogData, index) => {
                return (
                  <div className={css.Blog} key={blogData + index}>
                    <img src={blogData.BlogImage} />
                    <h3 style={{ fontSize: "24px" }}>{blogData.BlogHeader}</h3>
                    <p style={{ fontSize: "14px",fontWeight:"800" }}>{blogData.BlogSummary}</p>
                    <div className={css.BlogFooter}>
                      <img src={blogData.BloggerImage} />
                      <p>{blogData.BloggerName}</p>
                      <p>{blogData.WritedDate}</p>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    );
}