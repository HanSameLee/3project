/*eslint-disable*/

import '../scss/ConsultationBoard.scss'
import React, { useState } from 'react';
import { Modal } from 'bootstrap';

function ConsultationBoard() {


    //게시글과 관련된 useState
    let [글제목, 글제목변경] = useState(
        [
            '취업문제로 인한 스트레스',
            '머신러닝&딥러닝분야 구현하면서 스트레스를 받습니다',
            'DB연결을 잘 해낼 수 있을지 고민입니다',
            '프로젝트를 성황리에 끝낼 수 있을지 고민입니다']);
    let [닉네임, 닉네임변경] = useState(
        [
            '이한샘',
            '안효민',
            '문석현',
            '김주봉'
        ]);
    let [상세내용, 상세내용변경] = useState(
        [
            '프로젝트를 끝내고 취업을 할 수 있을지 고민입니다 ㅜㅜ',
            '머신러닝&딥러닝 부분 구현을 잘 해내야 하는데 하면서도 스스로 잘 하고 있는 것인지 잘 모르겠습니다..',
            '새로운 개발프로그램을 사용하여 DB에 연결해야 하는데 이 부분에서 어려움을 겪고 있어서 힘듭니다 ㅜㅜ',
            '마지막 프로젝트에서 조장을 맡았는데 주어진 프로젝트를 성황리에 끝마칠 수 있을지 고민입니다.'
        ]);
    let [날짜, 날짜변경] = useState(
        [
            '2022년 3월 26일',
            '2022년 2월 22일',
            '2022년 2월 23일',
            '2022년 2월 24일'
        ]);

    let [입력제목, 입력제목변경] = useState('');
    let [입력닉네임, 입력닉네임변경] = useState('');
    let [입력내용, 입력내용변경] = useState('');



    //오브젝트 내 배열 형식으로 사용해보려 했는데 잘 되지 않았다.. 
    // var [글, 글변경] = useState([
    //     {글제목 : '3.팀원들과 잘 협업할 수 있을지 고민입니다',
    //      닉네임 : '안효민',
    //      상세내용 : '협업이 힘드러요 ㅜㅜ',
    //      작성일 : '2022년 2월 22일',
    //      글번호 : 4
    //     },
    //     {글제목 : '2.DB연결을 잘 해낼 수 있을지 고민입니다',
    //      닉네임 : '문석현',
    //      상세내용 : 'DB연결 안되서 어려움을 겪고 있습니다..',
    //      작성일 : '2022년 2월 23일',
    //      글번호 : 3
    //     },
    //     {글제목 : '1.프로젝트를 성황리에 끝낼 수 있을지 고민입니다',
    //      닉네임 : '김주봉',
    //      상세내용 : '마지막 프로젝트에서 조장을 맡았는데 주어진 프로젝트를 성황리에 끝마칠 수 있을지 고민입니다. ',
    //      작성일 : '2022년 2월 24일',
    //      글번호 : 2
    //     },
    //     {글제목 : '4.하위',
    //     닉네임 : '이한샘',
    //     상세내용 : '하위',
    //     작성일 : '2022년 2월 25일',
    //     글번호 : 1
    //    }
    // ]);



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
    function 글쓰기버튼() {
        if (글쓰기박스 === 'false') {
            글쓰기박스보이기('true'), console.log({ 글쓰기박스 });
        } else {
            글쓰기박스보이기('false'), console.log({ 글쓰기박스 });
        }
    } //버튼을 눌렀을 때 글쓰기 버튼이 보이느냐 안보이느냐를 정하는 함수

    function 콘솔() {
        console.log({ 글 });
    }

    function 제목정렬() {
        글.sort(function (a, b) {
            return b.글번호 - a.글번호
        })
        console.log({ 글 })
    }


    return (
        <>

            <button className='btn btn-primary' onClick={() => { 글쓰기버튼() }}>글쓰기</button>

            {
                글쓰기박스 === 'true'
                    ? <WritingBox
                        글제목={글제목} 글제목변경={글제목변경} 닉네임={닉네임} 닉네임변경={닉네임변경} 상세내용={상세내용} 상세내용변경={상세내용변경} 날짜={날짜} 날짜변경={날짜변경}
                        글쓰기버튼={글쓰기버튼} 입력제목={입력제목} 입력제목변경={입력제목변경} 입력닉네임={입력닉네임} 입력닉네임변경={입력닉네임변경} 입력내용={입력내용} 입력내용변경={입력내용변경} />
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

function Modal박스() {
    return (
        <></>

    )
}

function WritingBox(props) {

    let now = new Date();

    return (
        <>
            <form>
                <div className='writingBox'>
                    <div className='writingMiniBox'>제목</div>
                    <div className='writingMiniBox'><input onChange={(e) => { props.입력제목변경(e.target.value), console.log(props.입력제목) }}></input></div>
                    <div className='writingMiniBox'>닉네임</div>
                    <div className='writingMiniBox' ><input onChange={(e) => { props.입력닉네임변경(e.target.value), console.log(props.입력닉네임) }}></input></div>
                    <div className='writingMiniBox'>내용</div>
                    <div className='writingMiniBox'><textarea onChange={(e) => { props.입력내용변경(e.target.value), console.log(props.입력내용) }}></textarea></div>
                    <div className='writingMiniBox'>

                        <button type='button' className='btn btn-primary'
                            onClick={() => {

                                var newTitle = [...props.글제목]
                                newTitle.unshift(props.입력제목)
                                props.글제목변경(newTitle)

                                var newName = [...props.닉네임]
                                newName.unshift(props.입력닉네임)
                                props.닉네임변경(newName)

                                var newDate = [...props.날짜]
                                newDate.unshift(now)
                                props.날짜변경(newDate)

                                var newContent = [...props.상세내용]
                                newContent.unshift(props.입력내용)
                                props.상세내용변경(newContent)

                                console.log(props.글제목)
                                console.log(props.닉네임)
                                console.log(props.날짜)
                                console.log(props.상세내용)

                            }}
                        >글쓰기</button>

                        <button type='button' className='btn btn-primary' onClick={() => { props.글쓰기버튼('false') }} >취소</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ConsultationBoard;