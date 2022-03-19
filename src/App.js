/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import React, { useContext, useState} from 'react';
import Data from './components/data';
import Detail from './Detail';
import axios from 'axios';
import Cart from './components/Cart.js'
import Login from './components/Login.js'
import Join from './components/Join';
import CounselorList from './components/CounselorList'
import JoinCounselor from './components/JoinCounselor';
import JoinCheck from './components/JoinCheck';
import JoinSuccess from './JoinSuccess';
import ConsultationBoard from './components/ConsultationBoard';

import { Link, Route, Switch } from 'react-router-dom';
import Board from './components/ConsultationBoard';

let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

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
                <NavDropdown.Item href="/ConsultationBoard">상담게시판 이동</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">공지사항</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">자주 묻는 질문</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Switch>
        <Route exact path="/">
          <div>
            <div className='main'>
              <h1>지금 당신의 멘토를 만나보세요 </h1>
              <p>This is a simple hero</p>
              <Link to='CounselorList'><button type="button" class="btn btn-primary">멘토 보러가기</button></Link>
            </div>
          </div>
          <div className="cardBox">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/96/14/12/240_F_296141290_axIr6vXVqslWHRadEVNUJwdLNjuGADgb.jpg" />
              <Card.Body>
                <Card.Title>감정분석 서비스</Card.Title>
                <Card.Text>
                  QnA를 통한 텍스트 감정분석으로 <br />
                  현재 심리상태를 분석해드립니다
                </Card.Text>
                <Button variant="primary">진단받기</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Card.Title>전문상담 게시판</Card.Title>
                <Card.Text>
                  상담받고 싶은 내용을 익명으로 작성해주시면 상담사가 답변해 드립니다
                </Card.Text>
                <Link to ='ConsultationBoard'><Button variant="primary">상담게시판 이동</Button></Link>
              </Card.Body>
            </Card>
          </div> 
          {/* 카드박스 끝나는 부분 */}
          <div className='partDiv'>
            <h4>분야별 전문 상담사를 만나보세요</h4>
            <div className='fieldBox'>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-fever-fatigue-inipagistudio-mixed-inipagistudio.png'></img>
                <p>우울증</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-negative-thinking-mental-health-inipagistudio-mixed-inipagistudio.png'></img>
                <p>스트레스관리</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-burnout-mental-health-inipagistudio-mixed-inipagistudio.png'></img>
                <p>분노조절장애</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-bandage-immunization-awareness-inipagistudio-mixed-inipagistudio.png'></img>
                <p>트라우마</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-herd-immunity-immunization-awareness-inipagistudio-mixed-inipagistudio.png'></img>
                <p>대인기피증</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-friends-friendship-and-relationship-inipagistudio-mixed-inipagistudio.png'></img>
                <p>불안증</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-heart-mental-wellbeing-inipagistudio-mixed-inipagistudio.png'></img>
                <p>애정결핍증</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-group-friendship-and-relationship-inipagistudio-mixed-inipagistudio.png'></img>
                <p>가정문제</p>
              </div>
              <div className='fieldCard'>
                <img src='https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/2x/external-consultation-mental-wellbeing-inipagistudio-mixed-inipagistudio.png'></img>
                <p>성격개선</p>
              </div>
            </div>
          </div>

          <div className='partDiv'>
            <h4>상황에 맞게 상담사와 다양한 내면상담</h4>
            <div className='situationBox'>
                <div className='situationCard'>
                  <img src='https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                  <h5><b>15분 전화상담</b></h5>
                  <p>예약한 시간에 상담사로부터 전화가 옵니다.</p>
                  <br />
                  <a href='#'><b>상담 신청하기 ></b></a>
                </div>
                <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                  <h5><b>20분 영상상담</b></h5>
                  <p>상담원 방문이 어렵다면 영상상담으로 서로 마주보고 상담하세요.</p>
                  <a href='#'><b>상담 신청하기 ></b></a>
                </div>
                <div className='situationCard'>
                <img src='https://images.unsplash.com/photo-1590650624342-f527904ca1b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
                  <h5><b>30분 방문상담</b></h5>
                  <p>복잡한 사안이라면, 변호사 사무실로 방문하여 더 확실하고 깊이있게 상담을 받아보세요</p>
                  <a href='#'><b>상담 신청하기 ></b></a>
                </div>
              </div>
            </div>





          {/* 컴포넌트 페이지 부분 */}
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>
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
        <Route>
          <ConsultationBoard></ConsultationBoard>
        </Route>
        <Route path="/:pw">
          <div>아무거나적었을때 내가 나타난단다</div>
        </Route>

        
      </Switch>

    </div> 
// function app div 끝나는 부분
  );
}






export default App;
