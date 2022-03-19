/*eslint-disable*/

import '../scss/ConsultationBoard.scss'
import React, { useState } from 'react';
import { Modal } from 'bootstrap';

function ConsultationBoard() {

    let [글제목, 글제목변경] = useState(
        ['팀원들과 잘 협업할 수 있을지 고민입니다',
            'DB연결을 잘 해낼 수 있을지 고민입니다',
            '프로젝트를 성황리에 끝낼 수 있을지 고민입니다']);
    let [닉네임, 닉네임변경] = useState(
        ['안효민',
            '문석현',
            '김주봉'
        ]);
    let [상세내용, 상세내용변경] = useState([
        '협업이 힘드러요 ㅜㅜ',
        'DB연결 안되서 개빡쳐요ㅜㅜ',
        '팀원들이 말 존나 안들어요 ㅜㅜ'
    ]);
    let [날짜, 날짜변경] = useState([
        '2022년 2월 22일',
        '2022년 2월 23일',
        '2022년 2월 24일'
    ]);



    let [따봉, 따봉변경] = useState(0);
    let [댓글갯수, 댓글갯수변경] = useState(0);
    let [모달박스, 모달박스변경] = useState('false');

    let [인덱스, 인덱스변경] = useState('');
    // 인덱스별 게시판 글내용 등 빼오기 + 제목 클릭했을 대 모달창 보이는지 여부
    // 내부는 셔터(i)를 통해 관리 및 변경

    function 셔터(i) {
        if (인덱스 === i) {
            인덱스변경(''), console.log({ 인덱스 });
        } else {
            인덱스변경(i), console.log({ 인덱스 });
        }
    }
    function 글쓰기버튼(){

    }

    return (
        <>
            <button className='btn btn-primary'>글쓰기</button>
            <select className='lineUp' name='lineUp'>
                <option value=''>정렬</option>
                <option value=''>좋아요▼</option>
                <option value=''>작성일▼</option>
                <option value=''>제목▼</option>
                <option value=''>조회수▼</option>
            </select>
            <WritingBox/>
            <hr />
            {/* <div className="list">
                <h3 onClick={ ()=>{셔터()} }>{글제목[0]} </h3>
                <p>{닉네임}</p>
                <span>👍</span>{따봉}
                <span> 🗨️</span>{댓글갯수}
                <p>2월 17일 발행</p>
                <hr />
                {
                modal===true
                ?<ModalBox/>
                : null
            }
            </div> */}

            {
                글제목.map((a, i) => {
                    return <div>
                        <h3 onClick={() => { 셔터(i) }}>{a} </h3>
                        <p>{닉네임[i]}</p>
                        <span>👍</span>{따봉}
                        <span> 🗨️</span>{댓글갯수}
                        <p>2월 17일 발행</p>
                        <hr />
                        {
                            인덱스 === i
                                ? <ModalBox 글제목={글제목} 인덱스={인덱스} 닉네임={닉네임} 상세내용={상세내용} 따봉={따봉} 댓글갯수={댓글갯수} />
                                : null
                        }
                    </div>
                })
            }



        </>
    )

}

function ModalBox(props, a) {
    return (
        <div className='modalBox'>
            <hr />
            <h2>{props.글제목[props.인덱스]}</h2>
            <p>{props.닉네임[props.인덱스]}</p>
            <p>날짜</p>
            <p>{props.상세내용[props.인덱스]}</p>
            <p><span>👍</span>{props.따봉} <span> 🗨️</span>{props.댓글갯수}</p>
            <hr />
        </div>
    )
}

function WritingBox(){ 
    return(
        <>
        <div className='writingBox'>
            <form>
                <span>제목</span><input></input>
                <br />
                <span>내용</span><textarea></textarea>
                <br />
                <button className='btn btn-primary'>글작성</button><button className='btn btn-primary'>취소</button>
            </form>
        </div>
        </>
    )
}

export default ConsultationBoard;