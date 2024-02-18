
import React from 'react';

const UserCreationDate = ({ createdAt }) => {
  const dateObject = new Date(Date.parse(createdAt));
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  return (
    <span>{formattedDate}</span>
  );
};

export default UserCreationDate;
