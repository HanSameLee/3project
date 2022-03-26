import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/Login.scss';
import Axios  from "axios";



function Login() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [user1, setuser1] = useState("");

//     const login = () => {
//         Axios.post("/login", {
//             memId: inputId,
//             memPw: inputPw
            
//     }).then((response) => {
//         console.log(response);
//     });
//     alert(inputId+'님 환영합니다.')
// };

const login = async () => {
    
    const res = await Axios({
                            url: '/login',
                            method: 'POST',
                            data:{
                                memId:inputId,
                                memPw:inputPw
                            }
                            });
                            
    const data = await res.data;
    console.log(data)
    alert(data.mem_name+"님 환영합니다.");
    sessionStorage.setItem('ID',data.mem_id)
    sessionStorage.setItem('NAME',data.mem_name)
    window.location.replace("/")
    return res;
    
    };

        // console.log(Promise.resolve(res_data()));




    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }



    const sessionOut= () => {
        if (sessionStorage!=null){
            
        }
    }

    return (
        <div className="App container background">
            <section className="loginForm">
                <h1>로그인 페이지</h1>
                    <div className='intArea'>
                        <input type="text" name='id' id='id'onChange={handleInputId}/>
                        <label htmlFor='id'>username</label>
                    </div>
                    <div className='intArea'>
                        <input type="password" name='pw' id='pw'onChange={handleInputPw}/>
                        <label htmlFor='pw'>password</label>
                    </div>
                    <div className='btnArea'>
                    <button type='submit' onClick={()=>{login().then((res) => setuser1(res.data.mem_id))}}>로그인</button>
                    
                    <Link to='./joincheck'><button type='button'>회원가입</button></Link>
                    </div>
                <div className='caption'>
                    <a href='#'>패스워드를 잊어버리셨나요?</a>
                </div>
            </section>
        </div>
    );
}
export default Login;