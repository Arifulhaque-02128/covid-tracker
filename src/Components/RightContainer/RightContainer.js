import React, { useContext } from 'react';
import { CaseTypeContext, InfoContext } from '../../App';
import LineGraph from './LineGraph';

const RightContainer = () => {

    const [allCountryInfo, setAllCountryInfo] = useContext(InfoContext);
    const [caseType, setCaseType] = useContext(CaseTypeContext);
    const sortedInfo = allCountryInfo.sort ( (a, b) => b.cases - a.cases);

    return (
        <div>
            <h4 className="mt-3 text-info">Cases by countries</h4>
            <div className="table-data bg-light">
                <table className="table mt-3">
                    <tbody>
                        {
                            sortedInfo.map( singleInfo => 
                                <tr key={singleInfo.country}>
                                    <td>{singleInfo.country}</td>
                                    <td>{new Intl.NumberFormat("en-IN").format(singleInfo.cases)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="graph">
                <LineGraph caseType={[caseType, setCaseType]}></LineGraph>
            </div>
        </div>
    );
};

export default RightContainer;