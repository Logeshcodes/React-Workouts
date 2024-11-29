import ReactDOM from "react-dom"

const PortalDemo = () => {
     
    return ReactDOM.createPortal(
        <h3>Hello portal</h3>,
        document.getElementById('portal-demo')
    )
}

export default PortalDemo


// ReactDom.createPortal( element tag , document root)