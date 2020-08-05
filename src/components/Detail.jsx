import React from 'react';

const Detail = (props) => (
  <>
    <small>{props.label}</small>
    <h4>{(props.value === null || props.value === undefined) ? 'No disponible' : props.value}</h4>
  </>
);

export default Detail;
