


function ReservationVisit() {

    return (
        <div >
            <form>
            상담을 원하시는 날짜를 입력해주세요<br/>
            <input type="date"></input><br/><br/>
            상담을 원하시는 시간대를 입력해주세요<br/>
            <input type="number"></input>시 <input type="number"></input>분<br/><br/>
            <button className="btn btn-primary" type="submit">선택완료</button>
            <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

export default ReservationVisit;