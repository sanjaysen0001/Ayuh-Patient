import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const PatientForm = () => {
    const history = useHistory();
  const [data, setData] = useState({
    patientName: '',
    dateTime: '',
    category: '',
    diseases: '',
    doctorName: '',
    consultingType: '',
    attachment: null,
    historyNote: '',
    priority: '',
    age: '',
    gender: '',
    location: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleAttachmentChange = (e) => {
    setData({
      ...data,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    setData({
      patientName: '',
      dateTime: '',
      category: '',
      diseases: '',
      doctorName: '',
      consultingType: '',
      attachment: null,
      historyNote: '',
      priority: '',
      age: '',
      gender: '',
      location: '',
      status: ''
    });
  };
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>

      <Card>
        <CardHeader>
        <h2>Conversion in Take Form</h2>
          <Button color="danger" onClick={handleGoBack}>Back</Button>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="patientName">Patient Name</Label>
                  <Input
                    type="text"
                    name="patientName"
                    id="patientName"
                    value={data.patientName}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="dateTime">Date & Time</Label>
                  <Input
                    type="datetime-local"
                    name="dateTime"
                    id="dateTime"
                    value={data.dateTime}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="text"
                name="category"
                id="category"
                value={data.category}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="diseases">Diseases</Label>
              <Input
                type="text"
                name="diseases"
                id="diseases"
                value={data.diseases}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="doctorName">Doctor Name</Label>
              <Input
                type="text"
                name="doctorName"
                id="doctorName"
                value={data.doctorName}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="consultingType">Consulting Type</Label>
              <Input
                type="text"
                name="consultingType"
                id="consultingType"
                value={data.consultingType}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="attachment">Attachment</Label>
              <Input
                type="file"
                name="attachment"
                id="attachment"
                onChange={handleAttachmentChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="historyNote">History Note</Label>
              <Input
                type="textarea"
                name="historyNote"
                id="historyNote"
                value={data.historyNote}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="priority">Priority</Label>
              <Input
                type="text"
                name="priority"
                id="priority"
                value={data.priority}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="text"
                name="age"
                id="age"
                value={data.age}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="text"
                name="gender"
                id="gender"
                value={data.gender}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                value={data.location}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="text"
                name="status"
                id="status"
                value={data.status}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
            <Button color="primary" type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default PatientForm;
