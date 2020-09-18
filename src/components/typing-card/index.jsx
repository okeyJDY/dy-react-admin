import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Typing from '@/utils/typing';

import { Card } from 'antd';
import { TypeCardWrapper } from './style';

const DYTypeCard = memo(props => {
  // props and state
  const { title, height, source } = props;

  // other hook
  const sourceRef = useRef();
  const outputRef = useRef();
  useEffect(() => {
    const opts = {
      source: sourceRef,
      output: outputRef,
      delay: 36
    };
    const typing = new Typing(opts);
    typing.start();
  }, []);
  
  return (
    <TypeCardWrapper height={height}>
      <Card hoverable
            title={title}
            bordered={false}
            className="card" >
        <div ref={sourceRef}
             className="source" 
             dangerouslySetInnerHTML={{ __html: source }} />
        <div ref={outputRef} />
      </Card>
    </TypeCardWrapper>
  )
})

DYTypeCard.proeTypes = {
  title: PropTypes.string,
  height: PropTypes.number
}

DYTypeCard.defaultProps = {
  title: "何时使用",
  height: 136
}

export default DYTypeCard;
