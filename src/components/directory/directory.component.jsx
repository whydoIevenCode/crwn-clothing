import Category from "../category/category.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
