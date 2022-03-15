import { Form, Button, Card } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';

function JoinSuccess() {

    return (
        <div className='container check'  style={{marginTop:'10rem'}}>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/marble-statue-of-the-great-ancient-greek-philosopher-socrates-picture-id849212674?b=1&k=20&m=849212674&s=170667a&w=0&h=nCoyw46nSXhntf1D7arYJKkMU-YFmckCnQmmL31pZQg=" />
            <Card.Body>
                <Card.Title><b>회원가입을</b> 축하드립니다!</Card.Title>
                <Card.Text>
                    에픽테토스의 다양한 기능들을 통해 <br/>여러분의 삶을 지원할 것을 약속드립니다. <br/>Vamos!
                </Card.Text>
                <Button variant="primary">이용하러 가기</Button>
            </Card.Body>
        </Card>
        </div>

    )
}

export default JoinSuccess;