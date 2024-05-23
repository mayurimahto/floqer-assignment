// src/components/MainTable.tsx
import React from 'react';
import { Table } from 'antd';
import { data } from '../data';

interface MainTableProps {
  onRowClick: (year: number) => void;
}

interface DataType {
  year: number;
  totalJobs: number;
  averageSalary: number;
}

const MainTable: React.FC<MainTableProps> = ({ onRowClick }) => {
  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a: DataType, b: DataType) => a.year - b.year,
    },
    {
      title: 'Number of Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a: DataType, b: DataType) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary in USD',
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter: (a: DataType, b: DataType) => a.averageSalary - b.averageSalary,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="year"
      onRow={(record) => ({
        onClick: () => {
          onRowClick(record.year);
        },
      })}
    />
  );
};

export default MainTable;