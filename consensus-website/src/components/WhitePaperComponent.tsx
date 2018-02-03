import * as React from 'react';

interface WhitePaperText {
  title?: string;
  paragraph?: string;
}

const WhitePaper = (props: WhitePaperText) => {
  return(
    <div className="white-paper">
      <h3 className="white-paper-title">{ props.title }</h3>
      <p className="p-text">
        { props.paragraph }
      </p>
    </div>
  );
};

export default WhitePaper;