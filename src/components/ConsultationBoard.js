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

    var [글, 글변경] = useState([
        {글제목 : '3.팀원들과 잘 협업할 수 있을지 고민입니다',
         닉네임 : '안효민',
         상세내용 : '협업이 힘드러요 ㅜㅜ',
         작성일 : '2022년 2월 22일',
         글번호 : 4
        },
        {글제목 : '2.DB연결을 잘 해낼 수 있을지 고민입니다',
         닉네임 : '문석현',
         상세내용 : 'DB연결 안되서 어려움을 겪고 있습니다..',
         작성일 : '2022년 2월 23일',
         글번호 : 3
        },
        {글제목 : '1.프로젝트를 성황리에 끝낼 수 있을지 고민입니다',
         닉네임 : '김주봉',
         상세내용 : '팀원들이 말 존나 안들어요 ㅜㅜ',
         작성일 : '2022년 2월 24일',
         글번호 : 2
        },
        {글제목 : '4.하위',
        닉네임 : '이한샘',
        상세내용 : '하위',
        작성일 : '2022년 2월 25일',
        글번호 : 1
       }
    ]);



    let [따봉, 따봉변경] = useState(0);
    let [댓글갯수, 댓글갯수변경] = useState(0);
    let [모달박스, 모달박스변경] = useState('false');

    let [인덱스, 인덱스변경] = useState('');
    let [글쓰기박스, 글쓰기박스보이기] = useState('false');
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
        if(글쓰기박스 === 'false'){
            글쓰기박스보이기('true'), console.log({글쓰기박스});
        } else{
            글쓰기박스보이기('false'), console.log({글쓰기박스});
        }
    }

    function 콘솔(){
        console.log({글});
    }
    
    function 제목정렬(){
        글.sort(function(a,b){
            return b.글번호 - a.글번호
        })
        console.log({글})
    }


    return (
        <>
            <button onClick={()=>{제목정렬()}}>기본</button>
            <button onClick={()=>{콘솔()}}>변경</button>
            <button className='btn btn-primary' onClick={()=>{글쓰기버튼()}}>글쓰기</button>
            <select className='lineUp' name='lineUp'>
                <option value=''>정렬</option>
                <option value=''>좋아요▼</option>
                <option value=''>작성일▼</option>
                <option value=''>제목▼</option>
                <option value=''>조회수▼</option>
            </select>
            {
                글쓰기박스 === 'true'
                ?<WritingBox 글쓰기버튼={글쓰기버튼}/>
                : null
            } 
            {/* 글쓰기박스state값이 true이면 WritingBox가 보여지고
            false이면 감춰지도록 */}
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

function Modal박스(){
    return(
            <></>
        
    )
}

function WritingBox(props){ 
    return(
        <>
        <form>
            <div className='writingBox'>
                <div className='writingMiniBox'>제목</div>
                <div className='writingMiniBox'><input></input></div>
                <div className='writingMiniBox'>내용</div>
                <div className='writingMiniBox'><textarea></textarea></div>
                <div className='writingMiniBox'>
                    <button type='submit' className='btn btn-primary'>글쓰기</button>
                    <button type='button' className='btn btn-primary' onClick={()=>{props.글쓰기버튼('false')}} >취소</button>
                    </div>
            </div>
        </form>
        </>
    )
}

export default ConsultationBoard;