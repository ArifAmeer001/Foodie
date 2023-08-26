import "../App.css";
import BlogCard from "./BlogCard";
import BlogDb from "../DataBase/BlogDB";

const Blog = () => {
  const BlogCards = BlogDb.map((data) => {
    return (
      <BlogCard
        img={data.img}
        badge={data.badge}
        date={data.date}
        name={data.name}
        title={data.title}
        description={data.description}
      ></BlogCard>
    );
  });

  return (
    <>
      <section className="section section-divider white blog" id="blog">
        <div className="container">
          <p className="section-subtitle">Latest Blog Posts</p>

          <h2 className="h2 section-title">
            This Is All About <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>

          <ul className="blog-list">{BlogCards}</ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
