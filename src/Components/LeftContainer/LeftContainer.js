import React, { useContext, useEffect, useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import Map from './Map';
import CardItem from './CardItem';
import { CaseTypeContext, InfoContext } from '../../App';

const LeftContainer = () => {
    
    const [allCountryInfo, setAllCountryInfo] = useContext(InfoContext);
    const [caseType, setCaseType] = useContext(CaseTypeContext);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("Worldwide");
    const [info, setInfo] = useState({});
    const [mapPosition, setMapPosition] = useState([34.80746, -40.4796]);
    const [mapZoom, setMapZoom] = useState(3);

    useEffect( () => {
        const getInfoInitiallyFromApi = async () => {
            await fetch("https://disease.sh/v3/covid-19/all")
            .then( res => res.json())
            .then( data => setInfo(data));
        }
        getInfoInitiallyFromApi();
    }, []);

    useEffect( () => {
        const apiURL = "https://disease.sh/v3/covid-19/countries";
        const getCountriesFromApi = async () => {
            await fetch(apiURL)
            .then( res => res.json())
            .then( data => {
                const getCountries = data.map( singleData => singleData.country);
                setCountries(getCountries);
                setAllCountryInfo(data);
            });
        }
        getCountriesFromApi();
    }, []);

    const handleCountryChange = async (event) => {
        const selectedCountry = event.target.value;
        setCountry(selectedCountry);

        const infoURL = 
            selectedCountry === "Worldwide" 
            ? `https://disease.sh/v3/covid-19/all`
            : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

        await fetch(infoURL)
        .then( res => res.json())
        .then( data => {
            setInfo(data);
            setMapPosition([data.countryInfo.lat, data.countryInfo.long]);
            setMapZoom(5);
            setCountry(selectedCountry);
        });
        event.preventDefault();
    }

    return (
        <div>
            <header className="app-header">
                <div>
                    <h4 className="font-weight-bold">COVID-19 Tracker</h4>
                </div>
                <div>
                    <FormControl>
                        <Select variant="outlined" value={country} onChange={handleCountryChange}>
                            <MenuItem value="Worldwide">Worldwide</MenuItem>
                            {
                                countries.map(singleCountry => 
                                <MenuItem key={singleCountry} value={singleCountry}>{singleCountry}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </div>
            </header>
            <div>
                <CardItem caseType={[caseType, setCaseType]} countryInfo={info}></CardItem>
            </div>
            <div className="map-div">
                <Map caseType={caseType} info={allCountryInfo} zoom={mapZoom} position={mapPosition}></Map>
            </div>
        </div>
    );
};

export default LeftContainer;