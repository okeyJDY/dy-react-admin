import styled from 'styled-components';

export const DYPageHeaderWrapper = styled.div`
  .header {
    padding: 0;
    background: #fff;
    
    .header-item {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }
`