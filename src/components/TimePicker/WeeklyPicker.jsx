import React from 'react'
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return  current > moment().endOf('day') && current;
}


function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

export default class DailyTimePicker extends React.Component{
 
    constructor(){
        super()
        let starts = moment().startOf('week');
        let ends = moment().endOf('week');
        this.state={
            value:['开始时间','结束时间'],
            weeklyTime:[starts,ends]
        }
    }
    //获取选择日期
    handlerChange(e){
        console.log(e)
    }
  render(){
    return (
      <div className="daily-time">
      <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      defaultValue={this.state.weeklyTime}
    //   showTime={{
    //     hideDisabledOptions: true,
    //     defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
    //   }}
    placeholder={this.state.value}
    onChange={this.handlerChange.bind(this)}
    />
      <style>
        {`.daily-time{
          display:inline-block;
        }`}
      </style>
    </div>
    )
  }
}
