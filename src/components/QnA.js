import { useState } from "react";
import $ from 'jquery';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import '../scss/QnA.scss'
import { propTypes } from "react-bootstrap/esm/Image";


function QnA() {
    const [누른탭, 누른탭변경] = useState('1')

    return (
        <>
            <form action="http://project-jupyter-1.ddns.net:8851/" method="POST">
                    <Card className="qnACard q1" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 1.</Card.Header>
                        <Card.Header>자기 자신에 대해서 어떤 생각을 가지고 있나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q2" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 2.</Card.Header>
                        <Card.Header>혹시 남 앞에서 숨기는 것이 있다면 무엇이라고 생각하나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q3" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 3.</Card.Header>
                        <Card.Header>내 삶의 어떤 부분에서 감사함을 느끼고 있나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q4" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 4.</Card.Header>
                        <Card.Header>최근에 일어난 슬픈일이나 화난일이 있나요? 있다면 어떤 일 인가요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q5" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 5.</Card.Header>
                        <Card.Header>최근에 관심을 갖는 것들에는 어떤 것들이 있나요? 관심 갖는 것들이 없다면 그 이유는 무엇이라고 생각하시나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q6" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 6.</Card.Header>
                        <Card.Header>최근에 어떤 감정을 자주 느끼시나요? 그리고 그 감정을 주로 느끼는 원인은 무엇이라고 생각하나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q7" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 7.</Card.Header>
                        <Card.Header>10점 만점 중 오늘 하루는 몇점인가요? 그리고 그 점수를 준 이유는 무엇인가요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q8" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 8.</Card.Header>
                        <Card.Header>최근 주변사람과 생긴 갈등이 있나요? 있었다면 그 원인은 무엇인가요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q9" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 9.</Card.Header>
                        <Card.Header>사람들과 만난다면 주로 어떤 얘기를 하시나요?</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q10" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 10.</Card.Header>
                        <Card.Header>ㅁㄴㅇ</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} name='input' className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <button type="submit" className="btn btn-primary">제출하기</button>
            </form>
        </>
    )
}

function add(){

    return ($('.q2').addClass('.fff'))
}


export default QnA;