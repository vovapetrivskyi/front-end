import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AddEditItem from "./AddEditItem";
import "./addedit.css";

export default function AddEditPage() {
    return (
        <div>
        <Header></Header>
        <AddEditItem></AddEditItem>
        <Footer></Footer>
      </div>
    );
  }