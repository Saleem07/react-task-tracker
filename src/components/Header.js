import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, showTasks }) => {
  const onClick = () => {
    onShow(!showTasks);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showTasks ? "red" : "green"}
        text={showTasks ? "Close" : "Add"}
        onClick={onClick}
      />
    </header>
  );
};

//* default props if not given any propvalue
Header.defaultProps = {
  title: "hello",
};

//* lowercase p
Header.propTypes = {
  title: PropTypes.string, //* uppercase P
};
export default Header;
