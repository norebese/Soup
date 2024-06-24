import './regist.css';

function Regist() {
    return (
      <div className="body">
        <div className="nav">
          <button className="back_btn">←</button>
        </div>
        <div className="container">
          <form name="regist">
            <div className="section">
              <input type="text" placeholder="기업 코드" id="Corporation_Number" />
              <input type="text" placeholder="부서" id="team" />
              <input type="text" placeholder="직급" id="position" />
            </div>
            <div className="section">
              <input type="text" placeholder="아이디" id="userid" />
              <input className="password" type="password" placeholder="비밀번호" id="userpw" />
            </div>
            <div className="section">
              <input type="text" placeholder="이름" id="username" />
              <div className="radio">
                <div className="radio_tag">
                  남자
                  <input type="radio" name="gender" id="male" />
                </div>
                <div className="radio_tag">
                  여자
                  <input type="radio" name="gender" id="female" />
                </div>
              </div>
              <input type="date" id="date" min="1940-01-01" max="2024-12-31" />
              <input type="text" placeholder="이메일" id="email" />
            </div>
            <button className="button_type_B regist">회원가입</button>
          </form>
        </div>
      </div>
    );
  }

export default  Regist