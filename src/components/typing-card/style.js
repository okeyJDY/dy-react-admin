import styled from 'styled-components';

export const TypeCardWrapper = styled.div`
  .card {
    min-height: ${props => props.height + "px"};

    .source {
      display: none;
    }
  }
`