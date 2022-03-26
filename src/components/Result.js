import React from 'react';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import '../scss/Result.scss'
import queryString from 'query-string';
import { Link, Route, Switch } from 'react-router-dom';

console.log(window.location.search);
let qs = queryString.parse(window.location.search)
console.log(qs);

const data = {
    labels: [
        '화남',
        '부정',
        '두려움',
        '행복',
        '중립',
        '우울',
        '놀람'
    ],
    datasets: [{
      data: [qs['angry'], qs['disgust'], qs['fear'], qs['happiness'], qs['neutral'], qs['sadness'], qs['surprise']],
      backgroundColor: [
        '#FF0000',
        '#FF8000',
        '#9A2EFE',
        '#40FF00',
        '#A4A4A4',
        '#0040FF',
        '#F7FE2E'
      ],
      hoverBackgroundColor: [
        '#B40404',
        '#B45F04',
        '#5F04B4',
        '#31B404',
        '#6E6E6E',
        '#0431B4',
        '#AEB404'
      ]
    }]
  };

function Result() {

    

    return (
      
        <div className='resultBox'>
            <h2>나의 감정 분석 결과</h2>
            <Doughnut data={data} />
            <Link to="CounselorList"><button className='btn btn-primary'>상담사 보러가기</button></Link>
            <Link to='/'><button className='btn btn-primary'>메인으로</button></Link>
        </div>
      )
    
}

export default Result;