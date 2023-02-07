import React from 'react';
// import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
import "./style.css"



export default function Column ({
  className,
  id,
  gtc,
  gap_em,
  children,
}) {
 return(
<div className={`ffg ${className}`} style={{gridTemplateColumns:`repeat(${gtc}, 1fr)`, gap:`${gap_em}em`}}>{children}</div>
 );
};
;