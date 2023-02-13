import './button.styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={"bg-[#275342] hover:bg-[#14532d] w-80 text-white font-bold py-2 px-12 rounded"}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;