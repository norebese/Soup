import React from 'react';
import Card from 'react-bootstrap/Card';
import SurveyPieChart from '../../components/surveyPieChart';
import SurveyBarChart from '../../components/surveyBarChart';

const SurveyResult = () => {
    const pieData = [
        {
            "id": "make",
            "label": "make",
            "value": 571,
            "color": "hsl(126, 70%, 50%)"
        },
        {
            "id": "scala",
            "label": "scala",
            "value": 76,
            "color": "hsl(216, 70%, 50%)"
        },
        {
            "id": "java",
            "label": "java",
            "value": 391,
            "color": "hsl(301, 70%, 50%)"
        }
    ];

    const barData = [
        {
          "country": "물리적 환경",
          "hot dog": 111,
          "hot dogColor": "hsl(346, 70%, 50%)",
        },
        {
          "country": "AE",
          "hot dog": 122,
          "hot dogColor": "hsl(234, 70%, 50%)",
        },
        {
          "country": "AF",
          "hot dog": 195,
          "hot dogColor": "hsl(304, 70%, 50%)",
        },
        {
          "country": "AG",
          "hot dog": 149,
          "hot dogColor": "hsl(120, 70%, 50%)",
        },
        {
          "country": "AI",
          "hot dog": 126,
          "hot dogColor": "hsl(92, 70%, 50%)",
        },
        {
          "country": "AL",
          "hot dog": 200,
          "hot dogColor": "hsl(191, 70%, 50%)",
        },
        {
          "country": "AM",
          "hot dog": 131,
          "hot dogColor": "hsl(204, 70%, 50%)",
        }
      ]

    return (
        <div className="container mt-4">
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>설문이름 + 날짜</Card.Title>
                </Card.Body>
            </Card>
            <Card className="mb-4">
                    <div style={{ height: '300px', width: '100%' }}>
                        <SurveyPieChart data={pieData} />
                    </div>
            </Card>
            <Card className="mb-4">
                    <div style={{ height: '300px', width: '100%' }}>
                        <SurveyBarChart data={barData} />
                    </div>
            </Card>
        </div>
    );
}

export default SurveyResult;
