import React, { useState, useRef, useEffect } from "react";
import Edit from './Edit';
import Preview from './Preview';

function App() {
    const [about, setAbout] = useState({});
    const [education, setEducation] = useState({});
    const [work, setWork] = useState({});

    // Loading from local storage
    useEffect(() => {
        const about = JSON.parse(localStorage.getItem('about'));
        const education = JSON.parse(localStorage.getItem('education'));
        const work = JSON.parse(localStorage.getItem('work'));
        if (about) {
            setAbout(about);
        }
        if (education) {
            setEducation(education);
        }
        if (work) {
            setWork(work);
        }
    }, []);

    // Storing in local storage
    useEffect(() => {
        localStorage.setItem('about', JSON.stringify(about));
    }, [about]);

    useEffect(() => {
        localStorage.setItem('education', JSON.stringify(education));
    }, [education]);

    useEffect(() => {
        localStorage.setItem('work', JSON.stringify(work));
    }, [work]);

    console.log(about);

    function handleChange(e) {
        const { value, name } = e.target;
        setAbout({
            ...about,
            [name]: value
        })
    }

    function handleChangeEducation(e) {
        const { value, name } = e.target;
        setEducation({
            ...education,
            [name]: value
        })
    }

    function handleChangeWork(e) {
        const { value, name } = e.target;
        setWork({
            ...work,
            [name]: value
        })
    }

    return (
        <>
            <Edit handleChange={handleChange} handleChangeEducation={handleChangeEducation} handleChangeWork={handleChangeWork} />
            <br />
            Preview:
            <Preview about={about} education={education} work={work} />
        </>
    )
}

export default App;
