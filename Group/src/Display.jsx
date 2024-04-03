import React from 'react';
import "./App.css";
export default function Display() {
  const members = [
    {
      FirstName: 'Maedot',
      LastName: 'Amha',
    },
    {
      FirstName: 'Michael',
      LastName: 'Workineh',
    },
    {
      FirstName: 'Meklit',
      LastName: 'Melkamu',
    },
    {
      FirstName: 'Nahom',
      LastName: 'Ketsela',
    },
  ];

  return (
    <div>
      <ul>
        {members.map((member, index) => (
          <li className="lists" key={index}>
            {member.FirstName} {member.LastName}
          </li>
        ))}
      </ul>
    </div>
  );
}