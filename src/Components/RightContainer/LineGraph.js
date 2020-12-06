import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = (props) => {

    const [caseType, setCaseType] = props.caseType;
    const [date, setDate] = useState([]);
    const [covidCases, setCovidCases] = useState([]);
    const [covidDeath, setCovidDeath] = useState([]);

    useEffect( () => {
        const getData = async (caseType) => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=90')
            .then(res => res.json())
            .then(data => {
                const dates = Object.keys(data[caseType]);
                const myData = [];
                const myDate = [];
                for (let i = 0; i < dates.length; i++) {
                    const date = dates[i];
                    const nextDate = dates[i+1];
                    const formattedDate = new Date(date);
                    const months = [ 
                        "Jan", "Feb",  
                        "Mar", "Apr", "May",  
                        "June", "July", "Aug", 
                        "Sept", "Oct",  
                        "Nov", "Dec" 
                    ]; 
                    myDate.push(formattedDate.getDate()+1 + " " + months[formattedDate.getMonth()] + ", " + formattedDate.getFullYear());
                    const coronaCasesInOneDay = caseType==="deaths"
                     ? (data[caseType][nextDate] - data[caseType][date])
                     : ((data[caseType][nextDate] - data[caseType][date])/1000);
                    myData.push(coronaCasesInOneDay);
                }
                
                caseType==="deaths" ? setCovidDeath(myData) : setCovidCases(myData);
                
                setDate(myDate);
            });
        }
        getData( caseType );
    }, [caseType]);

    const DataForDeath = {
        labels : date,
        datasets: [
            {
                label : "New Deaths ",
                backgroundColor: "tomato",
                borderColor: "red",
                data : covidDeath
            }
        ]
    }
    const DataForCases = {
        labels : date,
        datasets: [
            {
                label : "New Cases (In Kilo)",
                backgroundColor: "tomato",
                borderColor: "red",
                data : covidCases
            }
        ]
    }
    const DataForRecovered = {
        labels : date,
        datasets: [
            {
                label : "New Recovery (In Kilo)",
                backgroundColor: "lightGreen",
                borderColor: "green",
                data : covidCases
            }
        ]
    }
    const OptionForCases = {
        scales : {
            xAxes : [
                {
                    ticks : {
                        // display: false
                        fontSize: 12,
                        fontFamily: 'Gotham-Medium',
                        maxRotation: 0.00001,
                        padding: 0,
                        labelOffset: 30,
                        callback(value, index) {
                            if (index % 2 == 0) return '';
                            return value;
                        },
                    },
                    gridLines : {
                        borderDash: [1, 2],
                        lineWidth : 1
                    }
                }
            ],
            yAxes : [
                {
                    ticks : {
                        min : 0,
                        max : 700,
                        stepSize: 100,
                        callback: function (value) {
                            return `${value}k`;
                        },
                    },
                    gridLines : {
                        display: false
                    }
                }
            ]
            
        }
    }
    const OptionForRecovered = {
        scales : {
            xAxes : [
                {
                    ticks : {
                        // display: false
                        fontSize: 12,
                        fontFamily: 'Gotham-Medium',
                        maxRotation: 0.00001,
                        padding: 0,
                        labelOffset: 30,
                        callback(value, index) {
                            if (index % 2 == 0) return '';
                            return value;
                        },
                    },
                    gridLines : {
                        borderDash: [1, 2],
                        lineWidth : 1
                    }
                }
            ],
            yAxes : [
                {
                    ticks : {
                        min : 0,
                        max : 600,
                        stepSize: 100,
                        callback: function (value) {
                            return `${value}k`;
                        }
                    },
                    gridLines : {
                        display: false
                    }
                }
            ]
            
        }
    }
    const OptionForDeath = {
        scales : {
            xAxes : [
                {
                    ticks : {
                        // display: false
                        fontSize: 10,
                        fontFamily: 'Gotham-Medium',
                        maxRotation: 0.00001,
                        padding: 0,
                        labelOffset: 30,
                        callback(value, index) {
                            if (index % 2 == 0) return '';
                            return value;
                        },
                    },
                    gridLines : {
                        borderDash: [1, 2],
                        lineWidth : 1
                    }
                }
            ],
            yAxes : [
                {
                    ticks : {
                        min : 0,
                        max : 15000,
                        stepSize: 3000,
                        callback: function (value) {
                            return `${value}`;
                        },
                    },
                    gridLines : {
                        display: false
                    }
                }
            ]
            
        }
    }

    return (
        <div>
            <h4 className="text-info mt-4">Worldwide new {caseType} </h4>
            <p className="text-info mb-3">(In Last 90 Days)</p>
            <div className="mx-4">
                <Line 
                    data={(caseType==="deaths" && DataForDeath) || (caseType==="cases" && DataForCases) ||(caseType==="recovered" && DataForRecovered) }
                    options={(caseType==="deaths" && OptionForDeath) || (caseType==="cases" && OptionForCases) ||(caseType==="recovered" && OptionForRecovered)} />
            </div>
            
        </div>
    );
};

export default LineGraph;