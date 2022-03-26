import React, { useState } from 'react';
import '../scss/Join.scss';
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Join(){
    
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputGender, setInputGender] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/join", {
            memId: inputId,
            memPw: inputPw,
            memName: inputName,
            memGender: inputGender,
            memPhone: inputPhone
    }).then((response) => {
        console.log(response);
    });
    alert('회원가입이 완료됐습니다!')
};

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }
    const handleInputName = (e) => {
        setInputName(e.target.value);
    }
    const handleInputGender = (e) => {
        setInputGender(e.target.value);
    }
    const handleInputPhone = (e) => {
        setInputPhone(e.target.value);
    }



    return (
        <div className="App container background">
            <section className="loginForm">
                <h1>회원가입 페이지</h1>
                <div>
                    <div className='intArea'>
                        <input type="text" name='id' id='id' autoComplete='off' onChange={handleInputId} required />
                        <label htmlFor='id'>아이디를 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw' autoComplete='off' onChange={handleInputPw} required />
                        <label htmlFor='pw'>비밀번호를 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw' autoComplete='off' required />
                        <label htmlFor='pw'>비밀번호 확인</label>
                    </div>
                    <div className='intArea'>   
                        <input type="text" name='name' id='name' autoComplete='off' onChange={handleInputName} required />
                        <label htmlFor='name'>성함을 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <select name='gender'onChange={handleInputGender}>
                            <option value=''>성별을 선택해주세요</option>
                            <option value='m'>남자</option>
                    
                            <option value='w'>여자</option>
                        </select>
                    </div>
                    <div className='intArea'>
                        <input type="tel" name='tel' id='tel' autoComplete='off' onChange={handleInputPhone} required />
                        <label htmlFor='tel'>연락처를 입력해주세요</label>
                    </div>
                    <div className='btnArea'>
                        <Link to='./Login'><button onClick={register}>회원가입</button></Link>
                    </div>
                </div>
                <div className='caption'>
                    <a href='#'>회원가입을 통해 에픽테토스의 다양한 도움을 받아보세요!</a>    
                </div> 
            </section>
        </div>
    );
}


export default Join;