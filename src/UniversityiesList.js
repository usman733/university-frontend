// UniversityList.js

import React, { useEffect, useState } from 'react';
import { getUniversityList } from './service';

const UniversityList = ({ country }) => {
    
    const [universities, setUniversityData] = useState([]);
    const [expanded, setExpanded] = useState({});


    useEffect(() => {
        getData();
    }, [country]);

    const getData = async () => {
        const universitiesList = await getUniversityList(country);
        setUniversityData(universitiesList.data)
    }


    const toggleUniversity = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const openWebsite = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='list'>

            <ul>
                {universities.map((university, index) => (
                    <li key={index} className='university-list'>
                        <span style={{ float: 'left', marginRight: '20px' }} onClick={() => toggleUniversity(index)}>
                            {expanded[index] ? '-' : '+'}
                        </span>
                        <div>
                            <span onClick={() => toggleUniversity(index)}>University Name:  {university.name}</span>
                            {expanded[index] && (
                                <div className='items'>
                                    <p>Country Code: {university.alpha_two_code}</p>
                                    <p>State / Province: {university["state-province"]}</p>
                                    <p>Country: {university.country}</p>
                                    <p>
                                        Domains:
                                        {university.domains.map((domain, i) => (
                                            <span key={i}>
                                                {' '} {domain}{' '}
                                            </span>
                                        ))}
                                    </p>
                                    <p>
                                        Websites:
                                        {university.web_pages.map((website, i) => (
                                            <span className='website-link' key={i} onClick={() => openWebsite(website)}>
                                                {' '} {website}{' '}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default UniversityList;
