import "./button.css";

const Button = ({onClick, children, ...props}) => {
    return (
        <span className="myButton" onClick={onClick} style={{...props.style}}>{children}</span>
    )
}

export default Button;