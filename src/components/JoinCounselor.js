import { Form, Button } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';

function JoinCounselor(){


    return (
        <div className="App container background">
            <section className="loginForm">
                <h1>상담사 회원가입 페이지</h1>
                <form action="">
                    <div className='intArea'>
                        <input type="text" name='id' id='id' autoComplete='off' required />
                        <label htmlFor='id'>아이디를 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw' autoComplete='off' required />
                        <label htmlFor='pw'>비밀번호를 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw' autoComplete='off' required />
                        <label htmlFor='pw'>비밀번호 확인</label>
                    </div>
                    <div className='intArea'>
                        <input type="text" name='name' id='name' autoComplete='off' required />
                        <label htmlFor='name'>성함을 입력해주세요</label>
                    </div>
                    <div className='intArea'>
                        <select name='gender'>
                            <option value=''>성별을 선택해주세요</option>
                            <option value='남자'>남자</option>
                            <option value='남자'>여자</option>
                        </select>
                    </div>
                    <div className='intArea'>
                        <input type="tel" name='tel' id='tel' autoComplete='off' required />
                        <label htmlFor='tel'>연락처를 입력해주세요!</label>
                    </div>
                    <div className='intArea'>
                        <select name='gender'>
                            <option value=''>상담 전문분야를 선택해주세요</option>
                            <option value='남자'>우울증</option>
                            <option value='남자'>스트레스관리</option>
                            <option value='남자'>트라우마</option>
                            <option value='남자'>대인기피증</option>
                            <option value='남자'>불안증</option>
                            <option value='남자'>애정결핍증</option>
                            <option value='남자'>성격개선</option>
                            <option value='남자'>자존감강화</option>
                            <option value='남자'>가정문제</option>
                        </select>
                    </div>
                    <div className='btnArea'>
                        <button type='submit'>회원가입</button>
                    </div>
                </form>
                <div className='caption'>
                    <a href='#'>회원가입을 통해 에픽테토스의 다양한 도움을 받아보세요!</a>
                </div>
            </section>
        </div>
    );
}

export default JoinCounselor;