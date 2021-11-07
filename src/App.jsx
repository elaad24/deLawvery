//components
import Navbar from "./components/Navbar";
import "./App.css";
import OrderPage from "./components/OrderPage";
import OrderNav from "./components/OrderNav";
import { useState } from "react";
import EditPage from "./components/EditPage";

function App() {
  let [editMode, setEditMode] = useState(false);
  let [editItem, setEdititem] = useState({});
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className="d-flex justify-content-start gap-5  ">
        <OrderNav
          editMode={editMode}
          callbackEditMode={setEditMode}
          callbackEditItem={setEdititem}
        />

        {editMode && editItem ? (
          <EditPage
            orderNumber={editItem.itemNumber}
            order={editItem}
            callbackEditMode={setEditMode}
          />
        ) : (
          <OrderPage />
        )}
      </main>
    </div>
  );
}

export default App;
