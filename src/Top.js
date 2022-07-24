import logo from './images/remote.png'

const Top = (Page) => {

    return (
        <div className="top">
            <div className="container-fluid p-4 bg-primary text-white text-center">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={logo} className="App-logo-top" alt="logo, a black and white remote from a console" />
                    </div>
                    <div className="col-sm-4">
                        <h1>{Page.page}</h1>
                        <img src={logo} className="App-logo-middle" alt="logo, a black and white remote from a console" />
                    </div>
                    <div className="col-sm-4">
                        <img src={logo} className="App-logo-top" alt="logo, a black and white remote from a console" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Top