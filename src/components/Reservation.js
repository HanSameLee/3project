import { useState } from "react";
import $ from 'jquery';



function Reservation() {
        let [category, category변경] = useState('false');

    return (
        <div >
            <select>
                <option value=''>원하시는 부류의 상담을 선택해주세요</option>
                <option key='이메일상담' value='이메일상담' id='hi'>이메일상담</option>
                <option key='전화상담'  value='전화상담'>전화상담</option>
                <option key='화상상담'  value='화상상담'>화상상담</option>
                <option key='방문상담'  value='방문상담'>방문상담</option>
            </select>
            <button>하위</button>
        </div>
    )
}

export default Reservation;