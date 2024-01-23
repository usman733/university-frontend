// UniversityList.js

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getUniversityList } from './service';

const UniversityList = ({ country, province }) => {

    const [universities, setUniversityData] = useState([]);
    const [expanded, setExpanded] = useState({});


    // useEffect(() => {
    //     getData();
    // }, [country]);

    const getData = async () => {
        const universitiesList = await getUniversityList({ country, province });
        setUniversityData(universitiesList.data)
    }

    useEffect(() => {
        if (universities.length == 0) {
            toast("no data found!")
        }
    }, [universities])


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

            {universities && universities.length > 0 && <ul>
                {universities.map((university, index) => (
                    <li key={index} className='university-list'>
                        <span style={{ float: 'left', marginRight: '20px' }} onClick={() => toggleUniversity(index)}>
                            {expanded[index] ? '-' : '+'}
                        </span>
                        <div>

                            <span onClick={() => openWebsite(university.web_pages[0])}>University Name:  {university.name}</span>
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
            </ul>}
            <button onClick={() => getData()}>Submit</button>
        </div>
    );
};

export default UniversityList;
