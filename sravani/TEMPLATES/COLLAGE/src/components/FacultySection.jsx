import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FacultySection({ onOpenEnquiry }) {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Robert Vance, Ph.D.',
      role: 'Dean of Sciences & Senior Physics Faculty',
      experience: '22+ Years Exp (Ex-IIT Delhi Faculty)',
      subject: 'Physics (JEE Advanced / NEET)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
      qualification: 'M.Sc., Ph.D. Physics'
    },
    {
      id: 2,
      name: 'Prof. Sarah Jenkins, M.Sc.',
      role: 'Head of Mathematics Department',
      experience: '18+ Years Exp (Author of JEE Calculus)',
      subject: 'Higher Mathematics (MPC & MEC)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      qualification: 'M.Sc. Pure Mathematics, B.Ed.'
    },
    {
      id: 3,
      name: 'Dr. Anand K. Sharma, Ph.D.',
      role: 'Lead Chemistry Specialist',
      experience: '19+ Years Exp (Organic & Physical)',
      subject: 'Chemistry (MPC & BiPC)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      qualification: 'Ph.D. Organic Chemistry'
    },
    {
      id: 4,
      name: 'Prof. Elena Rostova, M.Phil.',
      role: 'Head of Life Sciences & Botany',
      experience: '15+ Years Exp (NEET Top 100 Mentor)',
      subject: 'Botany & Zoology (BiPC)',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
      qualification: 'M.Sc. Life Sciences, M.Phil.'
    },
    {
      id: 5,
      name: 'CA Rajeshwar Reddy, FCA',
      role: 'Dean of Commerce & Accountancy',
      experience: '16+ Years Exp (CA-Foundation Mentor)',
      subject: 'Accountancy & Economics (MEC & CEC)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      qualification: 'Fellow Chartered Accountant (ICAI)'
    }
  ];


  const [startIndex, setStartIndex] = useState(0);
  const itemsVisible = 4;

  const nextTeachers = () => {
    if (startIndex + 1 <= teachers.length - itemsVisible) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevTeachers = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(teachers.length - itemsVisible);
    }
  };

  const visibleTeachers = teachers.slice(startIndex, startIndex + itemsVisible);

  return (
    <section id="section-3" className="lincoln-teachers-section">
      <div className="container">
        {/* Header with "Our Teachers :::" and circular arrows */}
        <div className="teachers-header-row">
          <h2 className="teachers-title">
            Our Teachers
            <span className="dots-grid-gray">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
          </h2>

          <div className="teachers-nav-arrows">
            <button 
              className="circle-arrow-btn" 
              onClick={prevTeachers}
              aria-label="Previous faculty"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className="circle-arrow-btn" 
              onClick={nextTeachers}
              aria-label="Next faculty"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Circular portrait row matching reference */}
        <div className="teachers-grid">
          {visibleTeachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="teacher-avatar-wrapper">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="teacher-avatar-img"
                />
                <div className="teacher-subject-tag">{teacher.subject.split(' ')[0]}</div>
              </div>
              <h4 className="teacher-name">{teacher.name}</h4>
              <p className="teacher-role">{teacher.role}</p>
              <div className="teacher-details">
                <span className="teacher-spec">{teacher.subject}</span>
                <span className="teacher-exp">{teacher.experience}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
