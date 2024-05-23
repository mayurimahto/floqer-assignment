// src/components/JobsTable.tsx
import React from 'react';
import { Table } from 'antd';
import { data } from '../data';

interface JobsTableProps {
  year: number | null;
}

//interface JobType {
 // title: string;
  //count: number;
//}

const JobsTable: React.FC<JobsTableProps> = ({ year }) => {
  if (year === null) return null;

  const jobData = data.find((d) => d.year === year)?.jobs || [];
  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={jobData}
      rowKey="title"
      pagination={false}
    />
  );
};

export default JobsTable;