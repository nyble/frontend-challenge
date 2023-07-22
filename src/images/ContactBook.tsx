import React from 'react';
import { useTheme } from 'styled-components';

type ContactBookPropsType = {
  stroke?: string;
  width: number;
  height: number;
};

const ContactBook = ({ stroke, width, height }: ContactBookPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="contact-book">
        <path
          id="Path 2"
          d="M8 3V21"
          stroke={stroke ? stroke : theme.colours.primary}
          strokeLinecap="round"
        />
        <path
          id="Rectangle 2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 3V21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H20Z"
          stroke={stroke ? stroke : theme.colours.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 1"
          d="M8 17.0001C8 15.0001 11.3333 15.3334 12.6667 14.0001C13.3333 13.3334 11.3333 13.3334 11.3333 10.0001C11.3333 7.77808 12.222 6.66675 14 6.66675C15.778 6.66675 16.6667 7.77808 16.6667 10.0001C16.6667 13.3334 14.6667 13.3334 15.3333 14.0001C16.6667 15.3334 20 15.0001 20 17.0001"
          stroke={stroke ? stroke : theme.colours.primary}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default ContactBook;
