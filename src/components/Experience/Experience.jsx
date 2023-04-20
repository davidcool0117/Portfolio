import React from "react";
import { CircleProgress } from 'react-gradient-progress'
import SkillBar from 'react-skillbars';

import "./Experience.css";
const Experience = () => {
  const skills = [
    {
      type: 'HTML',
      level: 100,
      color: {
        bar: '#FAD6A6',
        title: { text: '#fff' }
      }
    },
    {
      type: 'CSS',
      level: 85,
      color: {
        bar: '#FAD6A6',
        title: { text: '#fff' }
      }
    },
    {
      type: 'Javascript',
      level: 75, color: {
        bar: '#FAD6A6',
        title: { text: '#fff' }
      }
    },
    {
      type: 'React',
      level: 70, color: {
        bar: '#FAD6A6 ',
        title: { text: '#fff' }
      }
    },
    {
      type: 'HTML',
      level: 85,
      color: {
        bar: '#FAD6A6 ',
        title: { text: '#fff' }
      }
    },
    {
      type: 'NoSQL',
      level: 70,
      color: {
        bar: '#FAD6A6',
        title: { text: '#fff' }
      }
    }
  ];

  return (
    <div className="skills">
      <div className="experience" id="experience">
        <span>MY</span>
        <span>SKILLS</span>
      </div>
      <div className="progress_bar">
        <SkillBar skills={skills} />
      </div>
    </div>
  );
};

export default Experience;
