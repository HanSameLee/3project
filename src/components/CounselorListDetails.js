import { Form, Button, Card } from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom'
import '../scss/CounselorListDetails.scss'

function CounselorListDetails() {



    return (
        <>
            <div className='section fff'>
                <div className='section titleImage'><img src='https://cdn.imweb.me/thumbnail/20200730/d274d8cfe6cf3.jpg'></img></div>
                <div className='section sss'>
                    <div className='titleHeader'><h1>마음소리심리상담센터</h1></div>
                    <div className='titleName'><h2>김현주 선생님</h2></div>
                </div>
            </div>

            <div className='columnBox attribute'>
                인삿말
            </div>
            <div className='columnBox'>
                "상담은 잊어왔던 나와 만나는 시간이다"라고 정의하고 싶어요.
                <br></br>
                때로는 저와 마주앉은 내담자분들이 성당에서 고해성사를 하는 심정으로 그간 꼭꼭 묻어두었던 가슴 속의 이야기들을 꺼내는 모습을 봅니다. 사람들에게 표면에 드러나 만나기 즐거워하는 자신의 모습도 있지만, 어둠 속에 방치해두었던 자신의 일부도 존재합니다. 내담자가 만나기 싫어했던 바로 그 모습이 내담자를 괴롭히는 인격의 한 부분이 됩니다.<br /><br />
                상담자는 비판이나 편견이 없는 맑은 거울이 되어서 내담자가 그 속에 비친 자신의 모습을 들여댜보고, 마주할 수 있도록 돕습니다. 거울 속에 비친 민낯 속에는 숨기고 싶었던 흉터도 잡티도 주름도 어쩔 수 없이 비추일 때가 있지만, 상담자가 그 빈 거울 속에 비친 모습을 그냥 그대로 받아들일 때 내담자도 자기 모습을 비로소 수용하게 됩니다. 거울 속에 비친 잡티조차도 사랑스럽게 느껴질 때 세상을 살아갈 힘이 생깁니다. 상담이 현재의 자신을 있는 그대로 마주하고 받아들이는 과정이 되고, 그러한 과정을 통해 원하는 삶의 모습으로 변화하는 시간이 되었으면 좋겠습니다.<br /><br />
                그리고 상담이 조금 더 진행되다 보면, "상담은 나와 세상이 연결되는 경험이다"라고 느껴집니다. 나에 대한 이해와 수용은 세상을 이해하고 수용하는 바탕이 되고, 그러한 받아들임의 과정을 통해 고립에서 벗어날 수 있습니다. 고립은 병이 되지만, 연결은 성장을 가져옵니다. 상담과정을 통해 이러한 변화를 경험할 수 있었으면 합니다.<br /><br />
            </div>
            <div className='columnBox attribute'>
                상세프로필
            </div>
            <div className='columnBox'>

                임상심리학 석사(성신여대/게슈탈트 심리치료 전공)<br />
                경북대학교 학사<br /><br />

                상담심리사 1급<br />
                국가기술 임상심리사 1급<br />
                청소년상담사 2급<br />
                게슈탈트 상담심리사 1급<br />
                ADHD 치료전문가<br />
                미술치료사 1급000
            </div>
            <div className='columnBox attribute'>
                전문상담분야
            </div>
            <div className='columnBox'>
                스트레스관리<br />
                우울증<br />
                자존감강화<br />
                애정결핍증<br />
                성격개선<br />
                가정문제<br />
                대인관계<br />
                부부클리닉<br />
                불안<br />
            </div>
            <div className='columnBox attribute itemCenter'>
                <Link to='reservation'><button className='btn btn-primary'>상담예약하기</button></Link>
            </div>
        </>
    )
}

export default CounselorListDetails;