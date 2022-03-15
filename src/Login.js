import { Form, Button } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';
import './Login.scss';

function Login() {
    return (
        <div className="App container background">
            <section className="loginForm">
                <h1>로그인 페이지</h1>
                <form action="">
                    <div className='intArea'>
                        <input type="text" name='id' id='id' autoComplete='off' required />
                        <label htmlFor='id'>USER NAME</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw' autoComplete='off' required />
                        <label htmlFor='pw'>PASSWORD</label>
                    </div>
                    <div className='btnArea'>
                        <button type='submit'>로그인</button>
                        <Link to='/joincheck'><button type='button'>회원가입</button></Link>
                    </div>
                </form>
                <div className='caption'>
                    <a href='#'>패스워드를 잊어버리셨나요?</a>
                </div>
            </section>
        </div>
    );
}

export default Login;