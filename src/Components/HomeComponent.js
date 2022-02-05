import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
function Home(props){
    const [Mood, setMood] = useState("");
    return(
        <>
            <div className="spltter-home"></div>

            <div className="container main-body-home">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img src="/assets/image/doctor.png" alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                        <h4>
                            Happy
                        </h4>
                        <p>
                            <Button onClick={(event)=>{ setMood("Happy")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 quotes-doctor quotes-doctor-right">
                        <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Sad
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Sad")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src="/assets/image/d-5.png" alt=""></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img class="doctor-image" src="/assets/image/d-3.png" alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Crying
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Crying")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 quotes-doctor quotes-doctor-right">
                        <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Worry
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Worry")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src="/assets/image/d-5.png" alt=""></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img class="doctor-image" src="/assets/image/d-3.png" alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Frustated
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Frustated")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 quotes-doctor quotes-doctor-right">
                        <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Laughing
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Laughing")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img src="/assets/image/d-5.png" alt=""></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5">
                        <img class="doctor-image" src="/assets/image/d-3.png" alt=""></img>
                    </div>
                    <div className="col-sm-5 quotes-doctor">
                            <h4>
                                Distrubed
                            </h4>
                            <p>
                                <Button onClick={(event)=>{ setMood("Distrubed")}} variant="outline-warning" href="/chat">Click me</Button>{' '}
                            </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;