import React from 'react';
import { Button } from '@material-ui/core';
import style from '../../styles/Import.module.css';
import TextButton from './atomicComponents/textButton/TextButton';

function ImportExportContainer() {
  return (
    <div className={style.container}>
      <h3>Import/Export Trade Plan</h3>
      <div className={style.buttonContainer}>
        <TextButton
          backgroundColor="#2553A8"
          // width="30%"
          color="white"
          margin="10px"
        >
          IMPORT
        </TextButton>
        <TextButton backgroundColor="#1CCC02" color="white">
          EXPORT
        </TextButton>
      </div>
    </div>
  );
}

export default ImportExportContainer;
