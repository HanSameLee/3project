/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart.js'
import Login from './components/Login.js'
import Join from './components/Join';
import CounselorList from './components/CounselorList'
import JoinCounselor from './components/JoinCounselor';
import JoinCheck from './components/JoinCheck';
import JoinSuccess from './JoinSuccess';
import ConsultationBoard from './components/ConsultationBoard';
import CounselorListDetails from './components/CounselorListDetails';
import Reservation from './components/Reservation';
import ReservationSuccess from './components/ReservationSuccess';
import QnA from './components/QnA';


import { Link, Route, Switch } from 'react-router-dom';

let 재고context = React.createContext();

function App() {


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">에픽테토스</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">로그인</Nav.Link>
              <Nav.Link as={Link} to='/joincheck'>회원가입</Nav.Link>
              <NavDropdown title="더보기" id="basic-nav-dropdown">
                <NavDropdown.Item href="/CounselorList">상담사 찾기</NavDropdown.Item>
                <NavDropdown.Item href="/ConsultationBoard">익명상담게시판 이동</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">소개글</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Switch>
        <Route exact path="/">
          {/* 메인페이지 상단배너 */}
          <div className='main'>
            <div>
              <h1>지금 당신의 멘토를 만나보세요 </h1>
              <p>This is a simple hero</p>
            </div>
          </div>

          {/* 배너 아래 세개의 카드 레이아웃 있는 곳 */}
          <div className="cardBox">
            <Card style={{ width: '20rem'}}>
              <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/96/14/12/240_F_296141290_axIr6vXVqslWHRadEVNUJwdLNjuGADgb.jpg" />
              <Card.Body>
                <Card.Title><b>감정분석 서비스</b></Card.Title>
                <Card.Text>
                  QnA를 통한 텍스트 감정분석으로 <br />
                  현재 심리상태를 분석해드립니다
                </Card.Text>
                <Button variant="primary">진단받기</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem'}}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
              <Card.Body>
                <Card.Title><b>상담전문가 보러가기</b></Card.Title>
                <Card.Text>
                  다양한 분야의 상담사분들이 <br />
                  여러분의 마음상태를 진단해드립니다
                </Card.Text>
                <Link to="CounselorList"><Button variant="primary">진단받기</Button></Link>
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
              <Card.Body>
                <Card.Title><b>전문상담 게시판</b></Card.Title>
                <Card.Text>
                  상담받고 싶은 내용을 익명으로 <br />작성해주시면 상담사가 답변해 드립니다
                </Card.Text>
                <Link to='ConsultationBoard'><Button variant="primary">상담게시판 이동</Button></Link>
              </Card.Body>
            </Card>
          </div>

          {/* 두 개 카드 레이아웃 끝나는 부분 */}
          <div className='partDiv'>
            <h4>분야별 전문 상담사를 만나보세요</h4>
            <div className='fieldBox'>
              <div className='fieldCard'>
                <Link to='CounselorList'><p>우울증</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>스트레스관리</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>트라우마</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>대인기피증</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>불안증</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>애정결핍증</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>가정문제</p></Link>
              </div>
              <div className='fieldCard'>
              <Link to='CounselorList'><p>성격개선</p></Link>
              </div>
            </div>
          </div>

          <div className='partDiv'>
            <h4>상황에 맞게 상담사와 다양한 내면상담</h4>
            <div className='situationBox'>
              <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
                <h5><b>이메일 상담</b></h5>
                <p>오프라인 상담을 원하신다면 상담소로 방문하여 더 확실하고 깊이있게 상담을 받아보세요</p>
                <a href='/CounselorList'><b>상담 신청하기 ></b></a>
              </div>
              <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                <h5><b>15분 전화상담</b></h5>
                <p>예약한 시간에 상담사로부터 전화가 옵니다.</p>
                <br />
                <a href='/CounselorList'><b>상담 신청하기 ></b></a>
              </div>
              <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                <h5><b>20분 영상상담</b></h5>
                <p>상담원 방문이 어렵다면 영상상담으로 서로 마주보고 상담하세요.</p>
                <a href='/CounselorList'><b>상담 신청하기 ></b></a>
              </div>
              <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1590650624342-f527904ca1b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                <h5><b>30분 방문상담</b></h5>
                <p>오프라인 상담을 원하신다면 상담소로 방문하여 더 확실하고 깊이있게 상담을 받아보세요</p>
                <a href='/CounselorList'><b>상담 신청하기 ></b></a>
              </div>

            </div>
          </div>
        </Route>
        {/* 컴포넌트 페이지 부분 */}
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/JoinCheck">
          <JoinCheck></JoinCheck>
        </Route>
        <Route path="/join">
          <Join></Join>
        </Route>
        <Route path="/joinCounselor">
          <JoinCounselor></JoinCounselor>
        </Route>
        <Route path="/JoinSuccess">
          <JoinSuccess></JoinSuccess>
        </Route>

        {/* <Route path="/어쩌구" component={Modal}></Route> */}

        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/CounselorList">
          <CounselorList></CounselorList>
        </Route>
        <Route path="/CounselorListDetails">
          <CounselorListDetails></CounselorListDetails>
        </Route>
        <Route path="/ConsultationBoard">
          <ConsultationBoard></ConsultationBoard>
        </Route>
        <Route path="/reservation">
          <Reservation></Reservation>
        </Route>
        <Route path="/ReservationSuccess">
          <ReservationSuccess></ReservationSuccess>
        </Route>
        <Route path="/QnA">
          <QnA></QnA>
        </Route>



        <Route path="/:pw">
          <div>잘못된 경로로 접근하셨습니다.</div>
        </Route>
      </Switch>

    </div>
    // function app div 끝나는 부분
  );
}






export default App;
