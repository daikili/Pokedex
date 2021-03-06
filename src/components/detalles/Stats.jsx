
import React from "react";

export const Stats = (props) => {


    return (
        <div className="containerStats">
            <div className="statsOne">
                <div className="list">
                    <p>{props?.prop?.stats?.[0].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[0].base_stat }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[0].base_stat}
                            </div>
                        </div>
                </div>
                <br/>

                <div className="list">
                    <p>{props?.prop?.stats?.[1].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[1].base_stat }} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[1].base_stat}
                            </div>
                        </div>
                </div>
                <br/>

                <div className="list">
                    <p>{props?.prop?.stats?.[2].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[2].base_stat }} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[2].base_stat}
                            </div>
                        </div>
                </div>
            </div>
                <br/>
            <div className="statsTwo">
                <div className="list">
                    <p>{props?.prop?.stats?.[3].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[3].base_stat }} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[3].base_stat}
                            </div>
                        </div>
                </div>
        
                <br/>
            
                <div className="list">
                    <p>{props?.prop?.stats?.[4].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[4].base_stat }} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[4].base_stat}
                            </div>
                        </div>
                </div>
                <br/>
                <div className="list">
                    <p>{props?.prop?.stats?.[5].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[5].base_stat }} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[5].base_stat}
                            </div>
                        </div>
                </div>
                <br/>
            </div>

            </div>


       
    )
}
