import { Form, Button } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/Join.scss';


function Join(){


    return (
        <div className="App container background">
            <section className="loginForm">
                <h1>회원가입 페이지</h1>
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

export default Join;
