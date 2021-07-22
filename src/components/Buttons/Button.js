const Button = ({
    children, 
    fn,
    classes,
    isDisabled
}) => {
    return (
        <div className="btn-container">
            <button className={classes} onClick={fn} disabled={isDisabled}>
                {children}
            </button>
        </div>
    )
}

export default Button
