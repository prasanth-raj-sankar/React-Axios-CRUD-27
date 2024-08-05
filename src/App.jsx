import { useState, useEffect } from "react";
import "./App.css";
import Todoaddform from "./Component/Todoaddform";
import Product from "./Component/Product";
import {
  createProductAPI,
  updateProductAPI,
  deleteProductAPI,
  readProductsAPI,
} from "./apis-axios";

function App() {
  const [mock, setmock] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await readProductsAPI();
        setmock(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


const addmock = async (formdetails) => {
    try {
      const newform = await createProductAPI(formdetails);
      console.log('New Product Added:', newform);
      setmock([...mock, newform]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  
  const deletemock = async (pdId) => {
    try {
      await deleteProductAPI(pdId);
      const newmock = mock.filter((fromstatus) => fromstatus.id !== pdId);
      setmock(newmock);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editmock = async (formState, id) => {
    try {
      const updatedProduct = await updateProductAPI(id, formState);
      const tempmock = mock.map((p) => (p.id === id ? updatedProduct : p));
      setmock(tempmock);
      setEditData(null);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const loadEditData = (data) => {
    setEditData(data);
  };

  return (
    <>
      <h3 className="text-center" style={{ color: "#2a9a80" }}>
        MY mock List
      </h3>

      <Todoaddform addmock={addmock} editmock={editmock} editData={editData} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {mock.map((pd) => (
          <Product
            key={pd.id}
            name={pd.name}
            username={pd.username}
            email={pd.email}
            phone={pd.phone}
            website={pd.website}
            Status={pd.Status}
            deletemock={() => deletemock(pd.id)}
            loadEditData={loadEditData}
            id={pd.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
