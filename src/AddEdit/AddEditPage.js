import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AddEditItem from "./AddEditItem";
import "./addedit.css";

export default function AddEditPage() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <Header></Header>
      <AddEditItem entityId = {searchParams.get("entityId")} />
      <Footer></Footer>
    </div>
  );
}
