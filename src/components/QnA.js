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
            <form>
                    <Card className="qnACard q1" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 1.</Card.Header>
                        <Card.Header>1</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q2" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 2.</Card.Header>
                        <Card.Header>2</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q3" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 3.</Card.Header>
                        <Card.Header>3</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q4" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 4.</Card.Header>
                        <Card.Header>4</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q5" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 5.</Card.Header>
                        <Card.Header>5</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q6" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 6.</Card.Header>
                        <Card.Header>6</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q7" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 7.</Card.Header>
                        <Card.Header>7</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q8" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 8.</Card.Header>
                        <Card.Header>8</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q9" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 9.</Card.Header>
                        <Card.Header>9</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="qnACard q10" border="primary" style={{ width: '30rem', height: '22rem' }}>
                        <Card.Header>질문 10.</Card.Header>
                        <Card.Header>10</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <textarea rows={10} className="a" placeholder="답변을 입력해주세요"></textarea>
                                <button type="submit" className="btn btn-primary">제출하기</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </form>
        </>
    )
}

function add(){

    return ($('.q2').addClass('.fff'))
}


export default QnA;