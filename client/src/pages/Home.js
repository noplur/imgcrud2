import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
        <div className="col-md-3 card me-3 mt-2 p-0">
          <img src="photo1.jpg" alt="" width={"100%"} height={200} />
          <div className="p-2">
            <h3>User 1</h3>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="#" style={{ textDecoration: "none" }}>
                Edit
              </Link>
              <button className="btn btn-danger btn-sm">X</button>
            </div>
          </div>
        </div>
    <div className="col-md-3 card me-3 mt-2 p-0"></div>
      <img src="photo1.jpg" alt="" width={"100%"} height={200} />
          <div className="p-2">
            <h3>User 2</h3>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="#" style={{ textDecoration: "none" }}>
                Edit
              </Link>
              <button className="btn btn-danger btn-sm">X</button>
            </div>
          </div>
        </div>
      )}

export default Home;