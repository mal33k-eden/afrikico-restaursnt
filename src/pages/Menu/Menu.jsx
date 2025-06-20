import BreadCrumb from "../../components/common/BreadCrumb";
import FoodMenuListOne from "./Sections/FoodMenuListOne";
import FoodGallerySection from "./Sections/FoodGallerySection";
import FoodMenuListTwo from "./Sections/FoodMenuListTwo";
import FoodMenuListThree from "./Sections/FoodMenuListThree";
import FoodMenuListFour from "./Sections/FoodMenuListFour";
import FoodMenuListFive from "./Sections/FoodMenuListFive";
import FoodMenuListSix from "./Sections/FoodMenuListSix";
import FoodMenuListSeven from "./Sections/FoodMenuListSeven";


const Menu = () => {
  return (
    <>
      <BreadCrumb />
      <FoodMenuListOne />
      <FoodMenuListTwo />
      <FoodMenuListThree />
      <FoodMenuListFour />
      <FoodMenuListFive />
      <FoodMenuListSix />
      <FoodMenuListSeven/>
      <FoodGallerySection />
    </>
  );
};

export default Menu;
