const Container = ({children}) => {
    return (
        <div className="wrapper">
            <div className="main-container">
                {children}
            </div>
            
        </div>
    )
}

export default Container
