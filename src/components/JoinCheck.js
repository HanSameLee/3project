import { Form, Button, Card } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/JoinCheck.scss';

function JoinCheck() {
    return (
        <div className='container check'>
        <Card style={{ width: '25rem' , height:'25rem', marginTop:'10rem' }}>
            <Card.Body style={{margin:'5rem', width:'17rem'}}>
                <Card.Title>
                    <b>내담자</b> 이신가요?
                </Card.Title>
                <Card.Text>
                    에픽테토스의 다양한 상담사분들 중 <br/> 나에게 꼭 맞는 상담사를 찾아보세요.<br/><br/>
                </Card.Text>
                <Link to='join'><Button variant="primary">일반 회원가입</Button></Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '25rem' , height:'25rem', marginTop:'10rem'   }}>
        <Card.Body style={{margin:'5rem', width:'16rem'}}>
    <Card.Title>
        <b>상담사</b> 이신가요?
    </Card.Title>
    <Card.Text>
      에픽테토스의 좋은 상담사가 되어 자신있는 분야의 내담자분들을 만나보세요.
    </Card.Text>
    <Link to='joincounselor'><Button variant="primary">상담사 회원가입</Button></Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default JoinCheck;