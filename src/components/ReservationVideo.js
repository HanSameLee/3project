


function ReservationVideo() {

    return (
        <div>
            <form>
            링크를 받으실 연락처를 입력해주세요<br/>
            <input type="number"></input><br/>

            화상상담을 원하시는 시간대를 입력해주세요<br/>
            <input type="number"></input>시
            <input type="number"></input>분부터
            <input type="number"></input>시
            <input type="number"></input>분까지<br></br>
            
            <button className="btn btn-primary" type="submit">선택완료</button>
            <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

export default ReservationVideo;