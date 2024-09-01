import "./button.css";

const Button = ({onClick, children}) => {
    return (
        <ul className="myButton" onClick={onClick}>{children}</ul>
    )
}

export default Button;