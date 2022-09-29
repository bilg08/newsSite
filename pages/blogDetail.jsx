import { Avatar } from "../components/avatar/avatar";
import { useNewsDatasContext } from "../context/newsDatasContext";
import css from '../styles/blogDetail.module.css';

export const BlogDetails = () => {
  const { userInterestedBlog } = useNewsDatasContext();
  const BlogDetailsHeaderSection = ({children}) => {
    return <div className={css.BlogDetailsHeaderSection}>{children}</div>;
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
          Laboriosam odio vero corrupti ipsum ipsam, nemo nostrum natus eum,
          maiores, voluptatem numquam! Consequatur, vel, error quasi officia hic
          veniam nemo necessitatibus laborum nostrum incidunt, animi
          reprehenderit fuga. Nisi amet consequuntur quisquam, commodi excepturi
          tempora provident modi obcaecati, dolorem pariatur eum quae minus.
          Quas, ipsum nostrum! Eveniet fuga non explicabo officia in, magni quo
          quos velit soluta natus molestias voluptatum facere, vitae, ipsa
          architecto. Voluptatem sequi debitis minima beatae aspernatur
          consequatur reiciendis facilis. Iste cumque ex, provident alias in
          debitis eos animi architecto nisi doloremque unde rerum eaque officia
          cum. Repellat minus, officia officiis quas odit nihil. Quo voluptatem
          modi aliquam blanditiis inventore! Harum optio quia enim porro ut
          consectetur error nesciunt similique recusandae iusto nisi at suscipit
          et dicta labore reiciendis voluptate alias nobis, hic perferendis
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
      <div>
        
      </div>
    )
  }




    return (
      <div className={css.userInterestedBlogContainer}>
        <BlogDetailsHeaderSection>
          <BlogDetailsHeaderSectionHeader_BlogName_BloggerDetail />
          <BlogDetailsImage/>
          <BlogDetailsContentDetails/>
          <BlogFooterWithWrittenBy />
          <BlogComments/>
        </BlogDetailsHeaderSection>
      </div>
  );
}
export default BlogDetails