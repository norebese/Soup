import React, { useState } from 'react';
import styles from './surveyIntro.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SurveyIntro = () => {
  const [key, setKey] = useState('home');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/user/survey');
  };

  return (
    <div className={styles.homepage}>
      <Header/>
      <section id="intro" className={`${styles.wrapper} ${styles.style1}`}>
        <p className={styles.style2}><i className="fas fa-bullhorn"></i> 설문소개 및 유의사항</p>
      </section>

      <section id="features">
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          justify
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="home" title="설문소개">
            <div className="survey-introduction">
                <h2>설문소개</h2>
                <p>
                    안녕하십니까,
                </p>
                <p>
                    이 설문은 한국산업안전보건공단(KOSHA)에서 제공하는 "직무스트레스요인 측정 지침"에 기반하여 설계되었습니다. 본 설문은 직장에서 경험하는 다양한 직무 스트레스 요인을 평가하고, 이를 통해 근로자의 건강과 복지를 증진하기 위한 목적으로 실시됩니다.
                </p>
                <p>
                    설문지는 물리적 환경, 직무 요구, 직무 자율, 관계 갈등, 직무 불안정, 조직체계, 보상 부적절, 직장 문화 등 8개 주요 영역으로 구성되어 있으며, 각 영역별로 다양한 질문이 포함되어 있습니다. 설문에 응답해 주신 내용은 직무 스트레스 요인을 분석하고 개선하는 데 중요한 자료로 활용됩니다.
                </p>
            </div>
          </Tab>
          <Tab eventKey="profile" title="유의사항">
            <div className="survey-guidelines">
                <h2>유의사항</h2>
                <ol>
                    <li>
                    <strong>응답의 진실성</strong>: 설문 응답은 귀하의 실제 경험과 느낌을 기반으로 솔직하게 작성해 주시기 바랍니다. 정확한 응답이 향후 직무 환경 개선에 큰 도움이 됩니다.
                    </li>
                    <li>
                    <strong>개인정보 보호</strong>: 본 설문은 익명으로 진행되며, 응답 내용은 통계 분석 목적 외에는 사용되지 않습니다. 개인을 식별할 수 있는 어떠한 정보도 외부에 공개되지 않습니다.
                    </li>
                    <li>
                    <strong>응답 시간</strong>: 설문을 완료하는 데 약 10-15분 정도 소요됩니다. 응답 도중에 중단할 경우, 처음부터 다시 시작해야 할 수 있으니 시간을 충분히 확보하시고 응답해 주시기 바랍니다.
                    </li>
                    <li>
                    <strong>결과 활용</strong>: 설문 결과는 근로자의 직무 스트레스를 줄이고, 더 나은 근무 환경을 제공하기 위한 기초 자료로 활용됩니다. 결과 분석 후, 필요 시 추가적인 지원 프로그램이 제공될 수 있습니다.
                    </li>
                </ol>
            </div>
          </Tab>
        </Tabs>
        <div className={`d-grid gap-2 ${styles.fixedBottom}`}>
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            설문 시작
          </Button>
        </div>
      </section>

      
      <Footer/>
    </div>
  );
};

export default SurveyIntro;
