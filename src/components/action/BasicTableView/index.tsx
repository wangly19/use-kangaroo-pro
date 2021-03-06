import { fetchTableList } from 'umi'
import { useRef, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import Access from '../AuthPage/Access';
import useSWR from 'swr';

const columns: ProColumns<API.GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action.reload()}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  const { data, error } = useSWR("/api/user/123", () => fetchTableList(), {
    onErrorRetry: (pro) => {
      console.log(pro, 'pro')
    }
  })

  useEffect(() => {
    console.log('swr', data, error)
  }, [data, error])

  const handleRequest = async (props: API.TableRequestParams): Promise<{
    data: API.GithubIssueItem[],
    success: boolean,
    total: number,
  }> => {
    try {
      const res = await fetchTableList(props)
      return {
        data: res.list,
        success: true,
        total: res.total
      }
    } catch (throwError: unknown) {
      throw new Error(`desktop: ${ throwError }`)
    }
  }

  return (
    <ProTable<API.GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      request={ handleRequest }
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
        size: 'default'
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Access access={ 10 }>
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,
        </Access>
      ]}
    />
  );
};