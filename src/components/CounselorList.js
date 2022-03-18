import { Form, Button, Card } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/CounselorList.scss'

function CounselorList() {


    return (
        <>
        <div className='gridBox'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.imweb.me/thumbnail/20200730/d274d8cfe6cf3.jpg" />
                <Card.Body>
                    <Card.Title>김현주 선생님</Card.Title>
                    <Card.Text>
                    게슈탈트상담전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.imweb.me/thumbnail/20200730/150826cb5d69c.jpg" />
                <Card.Body>
                    <Card.Title>김누리 선생님</Card.Title>
                    <Card.Text>
                    상담심리전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.imweb.me/thumbnail/20200730/6eb63fc0f8983.jpg" />
                <Card.Body>
                    <Card.Title>김희정 선생님</Card.Title>
                    <Card.Text>
                        임상심리 전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>
        </div>
            <div className='more'>
            <button className='btn btn-primary'>더보기</button>
            </div>
        </>
    )
}

export default CounselorList;