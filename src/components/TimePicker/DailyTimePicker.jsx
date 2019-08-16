import React from 'react'
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

// function range(start, end) {
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// }

function disabledDate(current) {
  // Can not select days before today and today
  return  current > moment().endOf('day') && current;
}


// function disabledRangeTime(_, type) {
//   if (type === 'start') {
//     return {
//       disabledHours: () => range(0, 60).splice(4, 20),
//       disabledMinutes: () => range(30, 60),
//       disabledSeconds: () => [55, 56],
//     };
//   }
//   return {
//     disabledHours: () => range(0, 60).splice(20, 4),
//     disabledMinutes: () => range(0, 31),
//     disabledSeconds: () => [55, 56],
//   };
// }

export default class DailyTimePicker extends React.Component{
  constructor(){
    super()
    this.state = {
      dailyTime:moment(new Date()).add(-1, 'days')
    }
  }
      //获取选择日期
      handlerChange(e){
        console.log(e)
    }
  render(){
    return (
      <div className="daily-time">
      <DatePicker
        // format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        placeholder="选择日期"
    onChange={this.handlerChange.bind(this)}
    showToday={false}
    defaultValue={this.state.dailyTime}
        // disabledTime={disabledDateTime}
        // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
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
