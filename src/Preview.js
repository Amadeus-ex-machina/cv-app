import React from 'react';
import './Preview.css';

export default function Preview(props) {
  return (
    <div className='preview'>
      Name: <div className='resumeName'>{props.about.name}</div>
      <br />
      Email: {props.about.email}
      <br />
      Phone: {props.about.phone}
      <br />
      Profile: {props.about.profile}
      <br />
      <br />

      <div className='sectionHeader'>Education</div>
      School: {props.education.school}
      <br />
      Major: {props.education.major}
      <br />
      <br />

      <div className='sectionHeader'>Work</div>
      Company: {props.work.company}
      <br />
      Position: {props.work.position}
      <br />
      Description: {props.work.desc}
    </div>


  )
}
