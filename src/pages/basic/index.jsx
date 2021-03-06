import React, { memo } from 'react';
import { renderRoutes } from "react-router-config";

export default memo(function DYBasic(props) {
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  )
})
