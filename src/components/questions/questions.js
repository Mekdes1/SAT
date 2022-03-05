import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/umd/entry.webpack';

import './questions.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from './SAT-2018.pdf';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';


const Questions = () => {
  const [numPages, setNumPages] = useState (null);
  const [pageNumber, setPageNumber] = useState (1);

  function onDocumentLoadSuccess({numPages}) {
    console.log (numPages);
    setNumPages (numPages);
  }

  const onPageClick = ({pageNumber}) => {
    alert ('Clicked an item from page ' + pageNumber + '!');
  };

  return (
    <div style={{textAlign: 'center'}}>

      <div>
        {' '}  <p style={{marginTop: '10px'}}>
          {' '}<RiArrowLeftSLine
            onClick={() => {
              pageNumber <= 1
                ? console.log ('minimum page number')
                : setPageNumber (pageNumber - 1);
            }}
          />
          {' '}
          Page
          {' '}
          {pageNumber}
          {' '}
          of
          {' '}
          {numPages}
          {' '}{' '}
          <RiArrowRightSLine  onClick={() => {
              pageNumber >= numPages
                ? console.log ('maximum page number')
                : setPageNumber (pageNumber + 1);
            }} />
          {' '}
        </p>

      </div>

      <Document
        // externalLinkTarget={'_self'} 
      
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onItemClick={onPageClick}
        style={{textAlign: 'center',backgroundColor:'blue',color:'green'}}
      >

        <Page pageNumber={pageNumber} />
      </Document>

    </div>
  );
};

export default Questions;

// <div> <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} /> </div>
