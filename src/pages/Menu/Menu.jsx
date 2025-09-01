import BreadCrumb from "../../components/common/BreadCrumb";
import FoodMenuListOne from "./Sections/FoodMenuListOne";
import FoodGallerySection from "./Sections/FoodGallerySection";
import FoodMenuListTwo from "./Sections/FoodMenuListTwo";
import FoodMenuListThree from "./Sections/FoodMenuListThree";
// import FoodMenuListFour from "./Sections/FoodMenuListFour";
import FoodMenuListFive from "./Sections/FoodMenuListFive";
import FoodMenuListSix from "./Sections/FoodMenuListSix";
import FoodMenuListSeven from "./Sections/FoodMenuListSeven";
// import FoodMenuListEight from "./Sections/FoodMenuListEight";
// import FoodMenuListNine from "./Sections/FoodMenuListNine";
import FoodMenuListTen from "./Sections/FoodMenuListTen";

const Menu = () => {
  return (
    <>
      <BreadCrumb />
      <FoodMenuListOne />
      <FoodMenuListTwo />
      <FoodMenuListTen />
      <FoodMenuListThree />
      {/* <FoodMenuListFour /> */}
      <FoodMenuListFive />
      <FoodMenuListSix />
      {/* <FoodMenuListEight /> */}
      {/* <FoodMenuListNine /> */}
      <FoodMenuListSeven />
      <FoodGallerySection />
    </>
  );
};

export default Menu;
