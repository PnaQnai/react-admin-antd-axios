import React from 'react'
import { Table } from 'antd';
import { Resizable } from 'react-resizable';

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default class Demo extends React.Component {
    constructor(){
        super()
        this.state = {
            columns: [
                {
                    title: '时间',
                    width: 50,
                    key:'time',
                    dataIndex:'time'
                },
                {
                    title: '当日总浏览量',
                    width: 50,
                    key:'total',
                    dataIndex:'total'
                },
                {
                    title: '当日涨幅',
                    width: 50,
                    key:'increase',
                    dataIndex:'increase'
                },
                {
                    title: '求职招聘',
                    width: 50,
                    key:'findjob',
                    dataIndex:'findjob'
                },
                {
                    title: '房屋租售',
                    width: 50,
                    key:'housing',
                    dataIndex:'housing'
                },
                {
                    title: '顺风车',
                    width: 50,
                    key:'windmill',
                    dataIndex:'windmill'
                },
                {
                    title: '二手交易',
                    width: 50,
                    key:'trading',
                    dataIndex:'trading'
                },{
                    title: '生活圈',
                    width: 50,
                    key:'lifecircle',
                    dataIndex:'lifecircle'
                },{
                    title: '二手车',
                    width: 50,
                    key:'usedcar',
                    dataIndex:'usedcar'
                },{
                    title: '本地转让',
                    width: 50,
                    key:'local',
                    dataIndex:'local'
                },{
                    title: '婚恋交友',
                    width: 50,
                    key:'marrige',
                    dataIndex:'marrige'
                },{
                    title: '生活服务',
                    width: 50,
                    key:'lifeserver',
                    dataIndex:'lifeserver'
                },
            ],
        }
        this.components = {
            header: {
              cell: ResizeableTitle,
            },
          };
        this.data = [
            {
              key: 0,
              time: '2018-02-11',
              total: 120,
              increase: 'income',
              findjob: 'transfer',
              housing: 'transfer',
              windmill: 'transfer',
              trading: 'transfer',
              lifecircle: 'transfer',
              usedcar: 'transfer',
              local: 'transfer',
              marrige: 'transfer',
              lifeserver: 'transfer'
            },{
                key: 1,
                time: '2018-02-11',
                total: 120,
                increase: 'income',
                findjob: 'transfer',
                housing: 'transfer',
                windmill: 'transfer',
                trading: 'transfer',
                lifecircle: 'transfer',
                usedcar: 'transfer',
                local: 'transfer',
                marrige: 'transfer',
                lifeserver: 'transfer'
              }, {
                key: 2,
                time: '2018-02-11',
                total: 120,
                increase: 'income',
                findjob: 'transfer',
                housing: 'transfer',
                windmill: 'transfer',
                trading: 'transfer',
                lifecircle: 'transfer',
                usedcar: 'transfer',
                local: 'transfer',
                marrige: 'transfer',
                lifeserver: 'transfer'
              },{
                  key: 3,
                  time: '2018-02-11',
                  total: 120,
                  increase: 'income',
                  findjob: 'transfer',
                  housing: 'transfer',
                  windmill: 'transfer',
                  trading: 'transfer',
                  lifecircle: 'transfer',
                  usedcar: 'transfer',
                  local: 'transfer',
                  marrige: 'transfer',
                  lifeserver: 'transfer'
                },
                {
                    key: 4,
                    time: '2018-02-11',
                    total: 120,
                    increase: 'income',
                    findjob: 'transfer',
                    housing: 'transfer',
                    windmill: 'transfer',
                    trading: 'transfer',
                    lifecircle: 'transfer',
                    usedcar: 'transfer',
                    local: 'transfer',
                    marrige: 'transfer',
                    lifeserver: 'transfer'
                  },{
                      key: 5,
                      time: '2018-02-11',
                      total: 120,
                      increase: 'income',
                      findjob: 'transfer',
                      housing: 'transfer',
                      windmill: 'transfer',
                      trading: 'transfer',
                      lifecircle: 'transfer',
                      usedcar: 'transfer',
                      local: 'transfer',
                      marrige: 'transfer',
                      lifeserver: 'transfer'
                    }
          ];
    }


    handleResize(index){
        return ((e, { size }) => {
            this.setState(({ columns }) => {
              const nextColumns = [...columns];
              nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
              };
              return { columns: nextColumns };
            });
          })
    }

//   handleResize = index => (e, { size }) => {
//     this.setState(({ columns }) => {
//       const nextColumns = [...columns];
//       nextColumns[index] = {
//         ...nextColumns[index],
//         width: size.width,
//       };
//       return { columns: nextColumns };
//     });
//   };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered components={this.components} columns={columns} dataSource={this.data} pagination={false}/>;
  }
}

// const columns = [
//     // {
//     //     title: '时间',
//     //     width: 50,
//     //     key:'time'
//     // },
//     // {
//     //     title: '当日总浏览量',
//     //     width: 50,
//     //     key:'total'
//     // },
//     // {
//     //     title: '当日涨幅',
//     //     width: 50,
//     //     key:'increase'
//     // },
//     // {
//     //     title: '求职招聘',
//     //     width: 50,
//     //     key:'findjob'
//     // },
//     // {
//     //     title: '房屋租售',
//     //     width: 50,
//     //     key:'housing'
//     // },
//     // {
//     //     title: '顺风车',
//     //     width: 50,
//     //     key:'windmill'
//     // },
//     // {
//     //     title: '二手交易',
//     //     width: 50,
//     //     key:'trading'
//     // },{
//     //     title: '生活圈',
//     //     width: 50,
//     //     key:'lifecircle'
//     // },{
//     //     title: '二手车',
//     //     width: 50,
//     //     key:'usedcar'
//     // },{
//     //     title: '本地转让',
//     //     width: 50,
//     //     key:'local'
//     // },{
//     //     title: '婚恋交友',
//     //     width: 50,
//     //     key:'marrige'
//     // },{
//     //     title: '生活服务',
//     //     width: 50,
//     //     key:'lifeserver'
//     // },

// ];


// const data = [];
// for (let i = 1; i < 100; i++) {
//     data.push({
//         number: i
//     });
// }

// export default { columns, data }

// ReactDOM.render(
//   <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
//   mountNode,
// );