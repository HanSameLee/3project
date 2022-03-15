/*eslint-disable */
import { Navbar, Container, Nav, NavDropdown, Card, Button, Carousel } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import React, { useContext, useState } from 'react';
import Data from './data';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart.js'
import Login from './Login.js'
import Join from './Join';
import JoinCounselor from './JoinCounselor';
import JoinCheck from './JoinCheck';
import JoinSuccess from './JoinSuccess';

import { Link, Route, Switch } from 'react-router-dom';

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
                <NavDropdown.Item href="#action/3.1">상담사 찾기</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">상담사례</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">해결사례</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">상담글 쓰기</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">공지사항</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">친구초대</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">자주 묻는 질문</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


{/* dd */}
      <Switch>
        <Route exact path="/">
        <Carousel>
  <Carousel.Item  interval={100}>
    <img
      className="d-block w-10"
      src="https://images.unsplash.com/photo-1563393934034-21b781d905ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVscHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1647125529760-a17654ff8b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1647125529760-a17654ff8b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
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
                <Button variant="primary">사연 작성하기</Button>
              </Card.Body>
            </Card>
          </div>
          <button className='btn btn-primary' onClick={() => {

            axios.post('서버URL', { id: 'codingapple', pw: 1234 });

            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                console.log(result.data);
                shoes변경([...shoes, ...result.data]);
              })
              .catch(() => {
                console.log('실패했어요 ㅜㅜ');
              })

          }}>더보기</button>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>


        <Route path="/JoinCheck">
          <JoinCheck></JoinCheck>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/join">
          <Join></Join>
        </Route>
        <Route path="/joinCounselor">
          <JoinCounselor></JoinCounselor>
        </Route>
        <Route path="/joinSuccess">
          <JoinSuccess></JoinSuccess>
        </Route>

        {/* <Route path="/어쩌구" component={Modal}></Route> */}

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:pw">
          <div>아무거나적었을때 내가 나타난단다</div>
        </Route>
      </Switch>

    </div>

  );
}






export default App;
