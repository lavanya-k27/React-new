import Header from "../components/Header";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
      <title>404 page not found</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <Header />

      <div className="not-found-message">404 Page Not Found!</div>
    </>
  );
};

export default NotFoundPage;
