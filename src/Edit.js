import React from 'react'
import './Edit.css';

export default function Edit(props) {
    const { about, education, work } = props.sections;
    return (
        <div>
            <form>
                <label>
                    {/* ABOUT */}
                    ABOUT
                    <br />
                    Name:
                    <input type="text" name="name" value={about.name} onChange={props.handleChange} />
                    <br />
                    Email:
                    <input type="text" name="email" value={about.email} onChange={props.handleChange} />
                    <br />
                    Phone:
                    <input type="text" name="phone" value={about.phone} onChange={props.handleChange} />
                    <br />
                    Profile:
                    <br />
                    <textarea rows="5" cols="40" name="profile" value={about.profile} onChange={props.handleChange} />
                    <br />
                    <br />

                    {/* EDUCATION */}
                    EDUCATION
                    <br />
                    School:
                    <input type="text" name="school" value={education.school} onChange={props.handleChangeEducation} />
                    <br />
                    Major:
                    <input type="text" name="major" value={education.major} onChange={props.handleChangeEducation} />
                    <br />
                    Start date:
                    <input type="text" name="start" value={education.start} onChange={props.handleChangeEducation} />
                    <br />
                    End date:
                    <input type="text" name="end" value={education.end} onChange={props.handleChangeEducation} />
                    <br />
                    <br />

                    {/* WORK */}
                    WORK
                    <br />
                    Company:
                    <input type="text" name="company" value={work.company} onChange={props.handleChangeWork} />
                    <br />
                    Position:
                    <input type="text" name="position" value={work.position} onChange={props.handleChangeWork} />
                    <br />
                    Start date:
                    <input type="text" name="start" value={work.start} onChange={props.handleChangeWork} />
                    <br />
                    End date:
                    <input type="text" name="end" value={work.end} onChange={props.handleChangeWork} />
                    <br />
                    Description:
                    <br />
                    <textarea rows="5" cols="40" name="desc" value={work.desc} onChange={props.handleChangeWork} />
                </label>
            </form>
            <button type="button" onClick={props.resetResume}>Reset</button>
        </div>
    )
}
