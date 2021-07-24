const Container = ({children}) => {
    return (
        <div className="flex justify-center align-items-center wrapper">
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default Container
