import React from 'react'

export default function Edit(props) {
    console.log(props);
    return (
        <div>
            <form>
                <label>
                    {/* ABOUT */}
                    ABOUT
                    <br />
                    Name:
                    <input type="text" name="name" value={props.name} onChange={props.handleChange} />
                    <br />
                    Email:
                    <input type="text" name="email" value={props.email} onChange={props.handleChange} />
                    <br />
                    Phone:
                    <input type="text" name="phone" value={props.phone} onChange={props.handleChange} />
                    <br />
                    Profile:
                    <textarea rows="5" cols="40" name="profile" value={props.profile} onChange={props.handleChange} />
                    <br />
                    <br />

                    {/* EDUCATION */}
                    EDUCATION
                    <br />
                    School:
                    <input type="text" name="school" value={props.school} onChange={props.handleChangeEducation} />
                    Major:
                    <input type="text" name="major" value={props.major} onChange={props.handleChangeEducation} />
                    <br />
                    <br />

                    {/* WORK */}
                    WORK
                    <br />
                    Company:
                    <input type="text" name="company" value={props.company} onChange={props.handleChangeWork} />
                    Position:
                    <input type="text" name="position" value={props.position} onChange={props.handleChangeWork} />
                    Description:
                    <input type="text" name="desc" value={props.desc} onChange={props.handleChangeWork} />

                </label>
            </form>
        </div>
    )
}
