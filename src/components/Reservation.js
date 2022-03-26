import { useState } from "react";
import $ from 'jquery';
import '../scss/Reservation.scss'
import ReservationSuccess from './ReservationSuccess'
import { Link, Route, Switch } from 'react-router-dom';



function Reservation() {
    let [category, category변경] = useState('false');

    let [이메일, 이메일변경] = useState('');
    let [날짜, 날짜변경] = useState('');
    let [연락처, 연락처변경] = useState('');
    let [시작시간, 시작시간변경] = useState('');
    let [시작분, 시작분변경] = useState('');
    let [끝시간, 끝시간변경] = useState('');
    let [끝분, 끝분변경] = useState('');


    return (
        <div className="reservation">
            <p><b>원하시는 부류의 상담을 선택해주세요</b></p>
            <button className="btn btn-primary" onClick={() => { category변경('메일') }}>메일 상담</button>
            <button className="btn btn-primary" onClick={() => { category변경('전화') }}>전화 상담</button>
            <button className="btn btn-primary" onClick={() => { category변경('화상') }}>화상 상담</button>
            <button className="btn btn-primary" onClick={() => { category변경('방문') }}>방문 상담</button><br/><br/>
            {/* 메일상담 버튼 눌렀을 경우 */}
            {
                category === '메일'
                    ? <ReservationEmail 이메일={이메일} 이메일변경={이메일변경} 날짜={날짜} 날짜변경={날짜변경}></ReservationEmail>
                    : null
            }
            {/* 전화상담 버튼 눌렀을 경우 */}
            {
                category === '전화'
                    ? <ReservationCall 연락처={연락처} 연락처변경={연락처변경} 날짜={날짜} 날짜변경={날짜변경} 시작시간={시작시간} 시작시간변경={시작시간변경} 시작분={시작분} 시작분변경={시작분변경} 끝시간={끝시간} 끝시간변경={끝시간변경} 끝분={끝분} 끝분변경={끝분변경}></ReservationCall>
                    : null
            }
            {/* 화상상담 버튼 눌렀을 경우 */}
            {
                category === '화상'
                    ? <ReservationVideo></ReservationVideo>
                    : null
            }
            {/* 방문상담 버튼 눌렀을 경우 */}
            {
                category === '방문'
                    ? <ReservationVisit></ReservationVisit>
                    : null
            }
        </div>
    )
} // Reservation 컴포넌트 마무리 중괄호


// 메일상담 컴포넌트
function ReservationEmail(props) {

    return (
        <div>
            <form>
                <p><b>이메일을 입력해주세요</b></p>
                <input type="email" name="email" className="inputBar" onChange={(e)=>{props.이메일변경(e.target.value); console.log(e.target.value)}}></input><br/><br/>
                <p><b>이메일을 보내실 날짜를 선택해주세요.</b></p>  
                <input type="date" name="date" className="reservationDate" onChange={(e)=>{props.날짜변경(e.target.value); console.log(e.target.value)}}></input><br/><br/>
                {/* 선택완료버튼, 삼항연산자 연계 */}
                <Link to='/ReservationSuccess'><button className="btn btn-primary" type="submit" 
                onClick=
                {(e)=>{
                 props.이메일 === ''
                 ? alert('이메일을 입력해주세요!') || e.preventDefault()
                 : console.log('이메일입력완료') ||
                 props.날짜 === ''
                 ? alert('상담일을 선택해주세요!') || e.preventDefault()
                 : console.log('날짜입력완료')
                }}>선택완료</button></Link>
                
                <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

// 전화상담 컴포넌트
function ReservationCall(props) {

    return (
        <div>
            <form>
                <p><b>연락처를 입력해주세요</b></p>
                <input type="number" name="number" className="inputBar" onChange={(e)=>{props.연락처변경(e.target.value)}}></input><br/><br/>
                <p>통화를 원하시는 날짜를 선택해주세요</p>
                <input type="date" name="number" className="inputBar" onChange={(e)=>{props.날짜변경(e.target.value)}}></input>

                <p><b>통화를 원하시는 시간대를 입력해주세요 <br/>
                예시) 18시 30분부터 19시 30분까지</b></p>
                <input type="number" name="startHour" className="ReservationTime" onChange={(e)=>{props.시작시간변경(e.target.value)}}></input>시
                <input type="number" name="startMinute" className="ReservationTime" onChange={(e)=>{props.시작분변경(e.target.value)}}></input>분부터&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="endHour" className="ReservationTime" onChange={(e)=>{props.끝시간변경(e.target.value)}}></input>시
                <input type="number" name="endMinute" className="ReservationTime" onChange={(e)=>{props.끝분변경(e.target.value)}}></input>분까지<br/><br/>

                <button className="btn btn-primary" type="submit" 
                onClick=
                {(e)=>{
                    props.연락처 === ''
                    ? alert('연락처를 입력해주세요!') || e.preventDefault()
                    : console.log('연락처입력완료') ||
                    props.날짜 === ''
                    ? alert('상담 일자를 선택해주세요') || e.preventDefault()
                    : console.log('날짜입력완료') ||
                    props.시작시간 === ''
                    ? alert('시작 시간을 입력해주세요') || e.preventDefault()
                    : console.log('시작시간 입력완료') ||
                    props.시작분 === ''
                    ? alert('시작 분을 입력해주세요') || e.preventDefault()
                    : console.log('시작 분 입력완료') ||
                    props.끝시간 === ''
                    ? alert('끝 시간을 입력해주세요') || e.preventDefault()
                    : console.log('끝시간 입력완료') ||
                    props.끝분 === ''
                    ? alert('시작 분을 입력해주세요') || e.preventDefault()
                    : console.log('끝분 입력완료')
                }}>선택완료</button>
                <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

// 화상상담 컴포넌트
function ReservationVideo() {

    return (
        <div>
            <form>
                <p><b>링크를 받으실 연락처를 입력해주세요</b></p>
                <input type="number" className="inputBar"></input><br/><br/>

                <p><b>화상상담을 원하시는 시간대를 입력해주세요</b></p>
                <input type="number" name="startHour" className="ReservationTime"></input>시
                <input type="number" name="startMinute" className="ReservationTime"></input>분부터&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="endHour" className="ReservationTime"></input>시
                <input type="number" name="endMinute" className="ReservationTime"></input>분까지<br/><br/>

                <button className="btn btn-primary" type="submit">선택완료</button>
                <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

// 방문상담 컴포넌트
function ReservationVisit() {

    return (
        <div >
            <form>
                <p><b>상담을 원하시는 날짜를 입력해주세요</b></p>
                <input type="date" className="inputBar"></input><br /><br />
                <p><b>상담을 원하시는 시간대를 입력해주세요</b></p>
                <input type="number" name="startHour" className="ReservationTime"></input>시
                <input type="number" name="startMinute" className="ReservationTime"></input>분부터&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="endHour" className="ReservationTime"></input>시
                <input type="number" name="endMinute" className="ReservationTime"></input>분까지<br/><br/>
                <button className="btn btn-primary" type="submit">선택완료</button>
                <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}



export default Reservation;