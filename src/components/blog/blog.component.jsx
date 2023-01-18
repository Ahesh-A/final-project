import "./blog.styles.scss";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-heading-container">
          <h1>From Our Blog</h1>
        </div>
        <div className="blog-content-container">
          <div className="blog-content-card">
            <div className="blog-image-container">
              <img src={require("../../assets/blog/blog1.jpg")} alt="" />
            </div>
            <div className = "blog-card-description">
              <p className="blog-date">22 July , 2020. Monday</p>
              <p className="blog-content">Sed adipiscing ornare.</p>
              <p className="blog-continue-reading">Continue reading</p>
            </div>
          </div>
          <div className="blog-content-card">
            <div className="blog-image-container">
              <img src={require("../../assets/blog/blog2.jpg")} alt="" />
            </div>
            <div className = "blog-card-description">
              <p className="blog-date">22 July , 2020. Monday</p>
              <p className="blog-content">Man’s Fashion Winter Sale.</p>
              <p className="blog-continue-reading">Continue reading</p>
            </div>
          </div>
          <div className="blog-content-card">
            <div className="blog-image-container">
              <img src={require("../../assets/blog/blog3.jpg")} alt="" />
            </div>
            <div className = "blog-card-description">
              <p className="blog-date">22 July , 2020. Monday</p>
              <p className="blog-content">Women Fashion Festive.</p>
              <p className="blog-continue-reading">Continue reading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
