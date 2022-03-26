import { Form, Button, Card } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/CounselorList.scss'

function CounselorList() {


    return (
        <>
        <div className='gridBox'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/nyh.png" />
                <Card.Body>
                    <Card.Title>나예호 선생님</Card.Title>
                    <Card.Text>
                    게슈탈트상담 전문가
                    </Card.Text>
                    <Link to='CounselorListDetails'><Button variant="primary">자세히 보기</Button></Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/kss.png" />
                <Card.Body>
                    <Card.Title>김설송 선생님</Card.Title>
                    <Card.Text>
                    상담심리전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/lsh.png" />
                <Card.Body>
                    <Card.Title>임승환 선생님</Card.Title>
                    <Card.Text>
                        임상심리 전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/sjy.png" />
                <Card.Body>
                    <Card.Title>손지영 선생님</Card.Title>
                    <Card.Text>
                    코칭상담사, 운영실장
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/chs.png" />
                <Card.Body>
                    <Card.Title>차현석 선생님</Card.Title>
                    <Card.Text>
                    코칭상담사, 운영실장
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/hhd.png" />
                <Card.Body>
                    <Card.Title>황해도 선생님</Card.Title>
                    <Card.Text>
                        임상심리 전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/kdw.png" />
                <Card.Body>
                    <Card.Title>김동원 선생님</Card.Title>
                    <Card.Text>
                        상담심리 전문가
                    </Card.Text>
                    <Button variant="primary">자세히 보기</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://smhrd.or.kr/wp-content/uploads/2022/02/bbk.png" />
                <Card.Body>
                    <Card.Title>박병관 선생님</Card.Title>
                    <Card.Text>
                        상담심리 전문가
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