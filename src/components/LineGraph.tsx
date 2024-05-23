// src/components/LineGraph.tsx
import React from 'react';
import { Line } from '@ant-design/charts';
import { data } from '../data';

const LineGraph: React.FC = () => {
  const config = {
    data,
    xField: 'year',
    yField: 'totalJobs',
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: { showMarkers: true },
    smooth: true,
    interactions: [{ type: 'marker-active' }],
  };

  return <Line {...config} />;
};

export default LineGraph;