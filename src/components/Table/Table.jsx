

const columns = [
    {
        title: '序号',

        children: [
            {
                title: '',
                dataIndex: 'number',
                key: 'number',
                width: 50,
            }
        ]
    },
    {
        title: '基础数据',
        children: [
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                width: 50,
            },
            {
                title: '地区',
                dataIndex: 'area',
                key: 'area',
                width: 50,
            },
        ],
    },
    {
        title: '用户发布数据',
        children: [
            {
                title: '日求职招聘帖子数',
                key: 'daily-pages',
                width: 50,
            },
            {
                title: '我要找人',
                key: 'recruitment-pages',
                width: 50,
            },
            {
                title: '我要求职',
                key: 'findjob-pages',
                width: 50,
            },
            {
                title: '净增求职招聘帖子数',
                key: 'pages-increase',
                width: 50,
            },
            {
                title: '净增比例',
                key: 'user-percent',
                width: 50,
            }
        ]
    },
    {
        title: '站长发布数据',
        children: [
            {
                title: '日站长发布求职招聘',
                key: 'dailyrelease-station',
                width: 50,
            },
            {
                title: '我要找人',
                key: 'recruit-station',
                width: 50,
            },
            {
                title: '我要求职',
                key: 'findjob-station',
                width: 50,
            },
            {
                title: '日净增站长发布求职招聘帖子数',
                key: 'daily-increase',
                width: 50,
            },
            {
                title: '净增比例',
                key: 'increase-percent',
                width: 50,
            }
        ]
    },
    {
        title: '地区站长活跃情况',
        children: [
            {
                title: '总站长数',
                key: 'total-station',
                width: 50,
            },
            {
                title: '发布求职招聘站长数',
                key: 'release-stations',
                width: 50,
            },
            {
                title: '站长求职招聘日活跃率',
                key: 'station-active',
                width: 50,
            },
            {
                title: '下载下辖地区日报表',
                key: 'down-daily',
                width: 50,
            }
        ]
    },
];


const data = [];
for (let i = 1; i < 100; i++) {
    data.push({
        number: i
    });
}

export default { columns, data }

// ReactDOM.render(
//   <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
//   mountNode,
// );