import './profile.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Rohit Sharma</h1>
                            </div>
                            <div className="card-body">
                                <img src="../images/107.png" className="img-fluid" alt="Rohit Sharma" />
                            </div>
                            <div className="card-footer">
                                <p>
                                    Indian Captain <br />
                                    Apr 30, 1987 (36 years) <br />
                                    Right Handed Bat
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card box-shadow">
                            <div className="card-header">
                                <h1>Virat Kohli</h1>
                            </div>
                            <div className="card-body">
                                <img src="../images/164 (1).png" className="img-fluid" alt="Virat Kohli" />
                            </div>
                            <div className="card-footer">
                                <p>
                                    The Goat <br />
                                    Nov 05, 1988 (35 years) <br />
                                    Right Handed Bat
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Rishabh Pant</h1>
                            </div>
                            <div className="card-body">
                                <img src="../images/2972.png" className="img-fluid" alt="Rishabh Pant" />
                            </div>
                            <div className="card-footer">
                                <p>
                                    Destroyer <br />
                                    Oct 04, 1997 (26 years) <br />
                                    WK-Batsman
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Bhuvi Kumar</h1>
                            </div>
                            <div className="card-body">
                                <img src="../images/116.png" className="img-fluid" alt="Bhuvi Kumar" />
                            </div>
                            <div className="card-footer">
                                <p>
                                    Swing King <br />
                                    Feb 05, 1990 (33 years) <br />
                                    Right-arm fast-medium
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
