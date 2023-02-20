import React, { useState, useRef, useEffect } from "react";
import Edit from './Edit';
import Preview from './Preview';
import './App.css';

function App() {
    const [about, setAbout] = useState({});
    const [education, setEducation] = useState({});
    const [work, setWork] = useState({});

    const initialStateAbout = {
        name: '',
        email: '',
        phone: '',
        profile: ''
    };

    const initialStateEducation = {
        school: '',
        major: '',
        start: '',
        end: ''
    };

    const initialStateWork = {
        company: '',
        position: '',
        start: '',
        end: '',
        desc: ''
    };

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

    function resetResume() {
        setAbout({ ...initialStateAbout });
        setEducation({ ...initialStateEducation });
        setWork({ ...initialStateWork });
    }

    function addEducation() {
        
    }

    return (
        <>
            <div className='app'>
                <Edit sections={{ about, education, work }} handleChange={handleChange} handleChangeEducation={handleChangeEducation} handleChangeWork={handleChangeWork} resetResume={resetResume} />
                <br />
                <Preview about={about} education={education} work={work} />
            </div>
        </>
    )
}

export default App;
