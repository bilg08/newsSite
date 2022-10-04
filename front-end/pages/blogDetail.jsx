import axios from "axios";
import { useState, useRef } from "react";
import { Avatar  } from "../components";
import { useNewsDatasContext } from "../context/newsDatasContext";
import css from '../styles/blogDetail.module.css';
import { useThemeContext } from "../theme/themeProvider";

export const BlogDetails = () => {
  const { userInterestedBlog } = useNewsDatasContext();
  const [comments, setComments] = useState([]);
  const { isDarkTheme } = useThemeContext();
  const userWritedComment = useRef();

   function handleAddComment() {
    if (comments.length < 1) {
      setComments(async (prev) => {
        let prevValAcopy = prev;
        prevValAcopy = [...prevValAcopy, userWritedComment.current.value];
      
        return prevValAcopy;
      });  
    } else {
      alert('Та нэг л удаа сэтгэгдэл үлдээх боломжтой')
    }      
  }

  const BlogDetailsHeaderSection = ({children}) => {
    return (
      <div
        className={css.BlogDetailsHeaderSection}
      >
        {children}
      </div>
    );
  }
  

  const BlogDetailsHeaderSectionHeader_BlogName_BloggerDetail = ({ children }) => {
    
    return (
      <div className={css.BlogDetailsHeaderSection_Header}>
        <h1>{userInterestedBlog.text}</h1>
        <div className={css.BlogDetailsHeaderSection_BloggerAndBlogDetails}>
          <Avatar imgSrc={userInterestedBlog.owner.picture} />
          <p className={css.bloggerName}>
            {userInterestedBlog.owner.firstName}
          </p>
          <p className={css.publishDate}>2nd January,2022</p>
        </div>
      </div>
    );
  };

const BlogDetailsImage = () => {
  return (
    <div className={css.BlogDetailsImageContainer}>
      <img src={userInterestedBlog.image} />
    </div>
  );
};

  const BlogDetailsContentDetails = () => {
    return (
      <div className={css.BlogDetailsContentDetails}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quos
          inventore est consectetur delectus quisquam non illum aperiam itaque
          architecto autem vel distinctio tenetur libero possimus incidunt
          corporis. Tempore, nulla. Aperiam laboriosam quidem fugit sed adipisci
          esse quasi error excepturi fuga ipsam? Voluptate culpa nulla, est
          dolor, unde omnis nihil delectus repellat nostrum minus odio
          perferendis officiis facilis voluptatum. Itaque. Hic magnam, totam
          consequuntur sit dicta, facere consectetur ducimus consequatur esse
          quae cum eaque voluptas, ipsa in! Voluptates nesciunt iusto voluptatem
          maiores laborum consectetur aliquam, odit rerum minima officiis
          accusamus. Consequuntur delectus quisquam non illum aperiam itaque
          architecto autem vel distinctio tenetur libero possimus incidunt
          corporis. Tempore, nulla. Aperiam laboriosam quidem fugit sed adipisci
          esse quasi error excepturi fuga ipsam? Voluptate culpa nulla, est
          dolor, unde omnis nihil delectus repellat nostrum minus odio
          perferendis officiis facilis voluptatum. Itaque. Hic magnam, totam
          consequuntur sit dicta, facere consectetur ducimus consequatur esse
          quae cum eaque voluptas, ipsa in! Voluptates nesciunt iusto voluptatem
          maiores laborum consectetur aliquam, odit rerum minima officiis
          accusamus. Consequuntur optio dignissimos blanditiis assumenda
          aspernatur nesciunt deleniti at quas molestiae reiciendis mollitia
          fugiat in necessitatibus saepe velit nostrum, quod atque repudiandae
          voluptatum, et tempore veniam, quidem praesentium doloribus? Alias.
          Temporibus, aperiam. Sunt recusandae placeat fuga hic quam possimus
          magnam, ut modi, est laboriosam facere aliquam eos porro cum ex
          corporis voluptatibus, pariatur sequi. Molestias minus error labore
          facere odit! Mollitia porro quo vero doloremque voluptatibus assumenda
          esse. Fugiat repellendus a illo sequi ad, nam consectetur optio?
          Laborioc perferendis
          quidem. Earum hic quod necessitatibus repellendus!
        </p>
      </div>
    );
  };
  const BlogFooterWithWrittenBy = () => {
    return (
      <div className={css.BlogFooterContainer}>
        <Avatar imgSrc={userInterestedBlog.owner.picture} />
        <div className={css.FooterBloggerDetail}>
          <p style={{ fontSize: `14px` }}>WrittenBy</p>
          <p style={{ fontSize: `24px` }}>
            {userInterestedBlog.owner.firstName}
          </p>
          <p>CEO Team App</p>
        </div>
      </div>
    );
  }
  const BlogComments = () => {
    return (
      <div className={css.BlogCommentsContainer}>
        <div className={css.ShowBlogComments}>
          <h2>Ирсэн сэтгэгдлүүд</h2>
          <div className={css.ShowComments}>
            {comments.length === 0 ? (
              <p>Энд одоогоор сэтгэгдэл алга байна</p>
            ) : (
              comments.map((comment) => (
                <span
                  style={{
                    width: `70%`,
                    padding: `10px`,
                    borderRadius: "10px",
                    margin: `auto`,
                    backgroundColor: ` #f1f1f1`,
                    display: "flex",
                    gap:`15px`
                  }}
                >
                  <Avatar imgSrc={userInterestedBlog.owner.picture} />
                  <p>{comment}</p>
                </span>
              ))
            )}
          </div>
        </div>
        <div className={css.addCommentContainer}>
          <div className={css.addingCommentSection}>
            <div>
              <h3>Сэтгэгдэл</h3>
              <p
                style={{ color: "#888888", fontSize: `14px` }}
                className={css.addCommentSectionWarning}
              >
                Сэтгэгдэл ({comments.length}) Та сэтгэгдэл бичихдээ хууль зүйн
                болон ёс суртахууныг баримтална уу. Ёс бус сэтгэгдлийг админ
                устгах эрхтэй. Мэдээний сэтгэгдэлд би хариуцлага хүлээхгүй.
              </p>
            </div>
            <div>
              <input
                ref={userWritedComment}
                placeholder="Та сэтгэгдлээ оруулна уу"
                style={{
                  backgroundColor: ` #f1f1f1`,
                  borderRradius: `5px`,
                  padding: `15px`,
                  resize: `none`,
                  fontSize: `14px`,
                  border: `1px solid transparent`,
                  color: `#000`,
                  outline: "none",
                }}
              />

              <button
                style={{
                  border: "none",
                  borderRadius: `10px`,
                  width: `90px`,
                  height: `45px`,
                  background: `#3490DE`,
                }}
                onClick={handleAddComment}
              >
                Илгээх
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }




    return (
      <div
        style={{ background: isDarkTheme === true ? "black" : "white" }}
        className={css.userInterestedBlogContainer}
      >
        <BlogDetailsHeaderSection>
          <BlogDetailsHeaderSectionHeader_BlogName_BloggerDetail/>
          <BlogDetailsImage/>
          <BlogDetailsContentDetails/>
          <BlogFooterWithWrittenBy/>
          <BlogComments/>
        </BlogDetailsHeaderSection>
      </div>
    );
}
export default BlogDetails