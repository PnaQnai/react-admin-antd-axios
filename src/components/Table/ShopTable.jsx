

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
        title: '活动发布数据',
        children: [
            {
                title: '日总活动量',
                key: 'daily-pages',
                width: 50,
            },
            {
                title: '拼团',
                key: 'recruitment-pages',
                width: 50,
            },
            {
                title: '砍价',
                key: 'findjob-pages',
                width: 50,
            },
            {
                title: '秒杀',
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
        title: '活动参与数据',
        children: [
            {
                title: '日用户总参与量',
                key: 'dailyrelease-station',
                width: 50,
            },
            {
                title: '拼团',
                key: 'recruit-station',
                width: 50,
            },
            {
                title: '砍价',
                key: 'findjob-station',
                width: 50,
            },
            {
                title: '秒杀',
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
        title: '商家浏览量数据',
        children: [
            {
                title: '商家总量',
                key: 'total-station',
                width: 50,
            },
            {
                title: '当日商家浏览量',
                key: 'release-stations',
                width: 50,
            },
            {
                title: '当日商家浏览量净增',
                key: 'station-active',
                width: 50,
            },{
                title: '当日活动浏览量',
                key: 'daily-activity-scan',
                width: 50,
            },{
                title: '当日活动浏览量净增',
                key: 'daily-activity-increase',
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