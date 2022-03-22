


function ReservationEmail() {

    return (
        <div>
            <form>
            이메일을 입력해주세요<br/>
            <input type="email"></input><br/>

            이메일을 보내실 날짜를 선택해주세요.<br/>
            <input type="date"></input><br></br>
            <button className="btn btn-primary" type="submit">선택완료</button>
            <button className="btn btn-primary" type="reset">초기화</button>
            </form>
        </div>
    )
}

export default ReservationEmail;