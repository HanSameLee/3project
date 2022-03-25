import { useState } from "react";
import $ from 'jquery';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';

function ReservationSuccess() {

    return (
        <div className='container check'  style={{marginTop:'10rem'}}>
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/marble-statue-of-the-great-ancient-greek-philosopher-socrates-picture-id849212674?b=1&k=20&m=849212674&s=170667a&w=0&h=nCoyw46nSXhntf1D7arYJKkMU-YFmckCnQmmL31pZQg=" />
            <Card.Body>
                <Card.Title>상담신청이 완료되었습니다!</Card.Title>
                <Card.Text>
                    상담일정 조율차 상담사님이 미리 연락을 드릴 수 있습니다. <br/>조금만 기다려주세요! <br/>
                </Card.Text>
                <Link to='/'><Button variant="primary">메인으로</Button></Link>
            </Card.Body>
        </Card>
        </div>

    )
}

export default ReservationSuccess;