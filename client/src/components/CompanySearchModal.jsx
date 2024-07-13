import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, Form, Collapse } from 'react-bootstrap';
import { searchCompany } from '../services/authService';

const CompanySearchModal = ({ show, handleClose, handleSelect }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleSearch = async () => {
    try {
      const name = document.getElementById('comName').value;
      console.log('name', name);
      const response = await searchCompany(name);
      console.log(response);
      if (response.state === 'valid') {
        const companyData = response.companyData.data;
        setSearchResults(companyData);
      } else if (response.state === 'invalid') {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('기업검색 오류:', error);
    }
  };

  const handleCardClick = (company) => {
    handleSelect(company);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          <div className="d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="기업 이름을 입력하세요"
              id='comName'
            />
            <Button variant="primary" onClick={handleSearch} className="ml-2">
              검색
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {searchResults.length > 0 ? (
            searchResults.map(company => (
              <div key={company._id} className="col-md-12 mb-3">
                <Card onClick={() => handleCardClick(company)}>
                  <Card.Body>
                    <Card.Title>{company.C_Name}</Card.Title>
                    <Card.Subtitle>사업주: {company.C_CEO}</Card.Subtitle>
                    <Card.Subtitle>사업자등록번호: {company.C_EID}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompanySearchModal;
