import PropTypes from "prop-types";

const Product = ({
  name,
  username,
  id,
  deletemock,
  loadEditData,
  Status,
  email,
  phone,
  website,
}) => {
  return (
    <div className="product-card">
      <h2>Name: {name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <div className={`status ${Status === "Completed" ? "completed" : "not-completed"}`}>
        {/* <span>Status: </span>
        <select value={Status} disabled>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select> */}
      </div>
      <div className="button-group">
        <button
          className="edit-button"
          onClick={() =>
            loadEditData({
              name,
              username,
              Status,
              id,
              email,
              phone,
              website,
            })
          }
        >
          Edit
        </button>
        <button className="delete-button" onClick={() => deletemock(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  Status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deletemock: PropTypes.func.isRequired,
  loadEditData: PropTypes.func.isRequired,
};

export default Product;
