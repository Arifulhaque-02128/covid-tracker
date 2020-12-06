import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardItem = (props) => {
    const {cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } = props.countryInfo;
    const [caseType, setCaseType] = props.caseType;
    
    const handleCard = (typeOfCase) => {
        setCaseType(typeOfCase);
    }
    return (
        <div className="cards-item">
            <Card onClick={() => handleCard("cases")} className={`card ${caseType==="cases" && "active-style-red"}`} style={{backgroundColor: "white"}}>
                <CardContent className="p-3">
                    <Typography variant="h6" className="text-danger">Corona Cases</Typography>
                    <Typography className="my-2"><strong className="card-cases">{new Intl.NumberFormat("en-IN").format(todayCases)}</strong> today </Typography>
                    <Typography>{new Intl.NumberFormat("en-IN").format(cases)} total </Typography>
                </CardContent>
            </Card>
            <Card onClick={() => handleCard("recovered")} className={`card ${caseType==="recovered" && "active-style-green"}`} style={{backgroundColor: "white"}}>
                <CardContent className="p-3">
                    <Typography variant="h6" className="text-success">Recovered</Typography>
                    <Typography className="my-2"><strong className="card-cases">{new Intl.NumberFormat("en-IN").format(todayRecovered)}</strong> today </Typography>
                    <Typography>{new Intl.NumberFormat("en-IN").format(recovered)} total </Typography>
                </CardContent>
            </Card>
            <Card onClick={() => handleCard("deaths")} className={`card ${caseType==="deaths" && "active-style-red"}`} style={{backgroundColor: "white"}}>
                <CardContent className="p-3">
                    <Typography variant="h6" className="text-danger">Death</Typography>
                    <Typography className="my-2"><strong className="card-cases">{new Intl.NumberFormat("en-IN").format(todayDeaths)}</strong> today </Typography>
                    <Typography>{new Intl.NumberFormat("en-IN").format(deaths)} total </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardItem;