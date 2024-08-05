
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialstate = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

const Todoaddform = ({ addmock, editmock, editData }) => {
  const [frommock, setfrommock] = useState(initialstate);

  const handlechange = (e) => {
    setfrommock({
      ...frommock,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      editmock(frommock, editData.id);
    } else {
      addmock(frommock);
    }
    setfrommock(initialstate);
  };

  useEffect(() => {
    if (editData) {
      setfrommock(editData);
    } else {
      setfrommock(initialstate);
    }
  }, [editData]);

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={frommock.name}
            onChange={handlechange}
            placeholder="Todo Name"
            required
          />
          <br />
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            value={frommock.username}
            onChange={handlechange}
            placeholder="Username"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={frommock.email}
            onChange={handlechange}
            placeholder="Email"
            required
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            id="phone"
            value={frommock.phone}
            onChange={handlechange}
            placeholder="Phone"
            required
          />
          <br />
          <label htmlFor="website">Website</label>
          <input
            name="website"
            id="website"
            value={frommock.website}
            onChange={handlechange}
            placeholder="Website"
            required
          />
          <br />
          <button type="submit">{editData ? "Edit" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

Todoaddform.propTypes = {
  addmock: PropTypes.func.isRequired,
  editmock: PropTypes.func.isRequired,
  editData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }),
};

export default Todoaddform;
