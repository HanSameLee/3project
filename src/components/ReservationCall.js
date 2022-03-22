


function ReservationCall() {

    return (
        <div>
            <form>
            통화를 받으실 연락처를 입력해주세요<br/>
            <input type="number"></input><br/>

            통화를 원하시는 시간대를 입력해주세요<br/>
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

export default ReservationCall;