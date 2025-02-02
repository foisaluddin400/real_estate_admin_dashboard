import React from 'react';
import { Table, Avatar, Tag, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const RecentOrder = () => {
  const data = [
    {
      key: '1',
      orderId: '#12333',
      orderDate: '12/04/24',
      client: { avatar: 'https://i.pravatar.cc/150?img=1', name: 'Jacob Jones' },
      address: '2464 Royal Ln. Mesa, New Jersey',
      items: 2,
      total: '$546',
      appointment: '12/04/24 at 3:00 pm',
      status: 'Submitted',
      payment: 'Unpaid',
    },
    {
      key: '2',
      orderId: '#12333',
      orderDate: '12/04/24',
      client: { avatar: 'https://i.pravatar.cc/150?img=2', name: 'Dianne Russell' },
      address: '3517 W. Gray St. Utica, Pennsylvania',
      items: 6,
      total: '$783',
      appointment: '08/04/24 at 5:00 pm',
      status: 'Submitted',
      payment: 'Unpaid',
    },
    {
      key: '3',
      orderId: '#12333',
      orderDate: '12/04/24',
      client: { avatar: 'https://i.pravatar.cc/150?img=3', name: 'Robert Fox' },
      address: '2715 Ash Dr. San Jose, South Dakota',
      items: 3,
      total: '$246',
      appointment: '02/04/24 at 4:00 pm',
      status: 'Submitted',
      payment: 'Unpaid',
    },
  ];

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    
    {
      title: 'Client Name',
      dataIndex: 'client',
      key: 'client',
      render: (client) => (
        <div className="flex items-center">
          <Avatar src={client.avatar} alt={client.name} />
          <span style={{ marginLeft: 8 }}>{client.name}</span>
        </div>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    
    
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag style={{ borderRadius: '10px',backgroundColor:'white', color:'#9B3C7B', borderColor:'#9B3C7B' }}>
          {status}
        </Tag>
      ),
    },
   
    
  ];

  return (
    <div className=''>
      <h2 className="text-xl font-medium pt-3 pl-6">Recent Order</h2>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};
