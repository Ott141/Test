import { createRoot } from "react-dom/client";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { ButtonAppBar } from "./Head";

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
    <>
      <ButtonAppBar />,
      <Body/>,
      <Footer/>,
    </>
  );
