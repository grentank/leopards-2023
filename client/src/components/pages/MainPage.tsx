import React from 'react';

export default function MainPage(): JSX.Element {
  let i = 0;
  return (
    <div>
      MainPage: {i}
      <button
        onClick={() => {
          i++;
          console.log(i);
        }}
      >
        click
      </button>
    </div>
  );
}
