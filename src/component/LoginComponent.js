import React, {useState} from 'react';
import ApprovalList from "../approval/ApprovalList";

const LoginComponent = () => {
    const [user, setUser] = useState({
        empno : '',
        password : ''
    });
    const [isLogined, setIsLogined] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);

    // input text에서 값 state 전달 함수
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const login = () => {
        const formData = new FormData();
        formData.append('empno', user.empno);
        formData.append('password', user.password);

        fetch('http://localhost:9797/login.do',{
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(res => {
            setIsLogined(true);
            console.log(res.data)
        }).catch(err => console.log(err));
    }
    const logout = () => {
        fetch('http://localhost:9797/logout.do',{
            method: 'GET',
            credentials: 'include',
        })
            .then(res => {
                setIsLogined(false);
            })
    }



    if(isLogined){
        return (
            <div>
                로그인 성공!
                <button onClick={logout}>로그아웃</button>
                <ApprovalList />
            </div>
        )
    } else{
        return (
            <div className="login-container">
                <div className='loginBox' style={{width:'500px',margin:'auto'}}>
                    <h2 className='login-title'>로그인</h2>
                    <div className="mb-3 mt-3">
                        아이디
                        <input type='text' id='empno' className='form-control' name='empno' onChange={handleChange} value={user.empno}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type='password'  className='form-control' name='password' onChange={handleChange} value={user.password}/>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                        </label>
                    </div>
                    <button type='button' className='btn btn-primary' onClick={login}>로그인</button>
                </div>
            </div>
        );
    }

};

export default LoginComponent;