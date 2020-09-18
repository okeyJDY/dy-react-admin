import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Breadcrumb } from 'antd';
import { CustomBreadcrumbWrapper } from './style';

const DYCustomBreadcrumb = memo(props => {
  const { title } = props;
  return (
    <CustomBreadcrumbWrapper>
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/home">首页</NavLink>
        </Breadcrumb.Item>
        {
          title.map((item, index) => {
            return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
          })
        }
      </Breadcrumb>
    </CustomBreadcrumbWrapper>
  )
})

DYCustomBreadcrumb.propTypes = {
  title: PropTypes.array.isRequired
}

DYCustomBreadcrumb.defaultProps = {
  title: []
}

export default DYCustomBreadcrumb;