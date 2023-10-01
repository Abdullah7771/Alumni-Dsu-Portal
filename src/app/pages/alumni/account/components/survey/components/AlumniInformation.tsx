import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

interface Props{
    onSubmit:(formData:any)=>void
}
const AlumniForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNo: '',
    yearOfIntake: '',
    degreeProgram: '',
    yearOfGraduation: '',
    employed: 'No',
    currentEmployer: '',
    position: '',
    industry: '',
    employmentPeriod1: '',
    employmentPeriod2: '',
    lastSalary: '',
    academicSpecialization: '',
    professionalSpecialization: '',
    firstJobExperienceYear: '',
    firstJobEmploymentPeriod1: '',
    firstJobEmploymentPeriod2: '',
    firstJobSalary: '',
    personalEmail: '',
    mobileContact: '',
  })

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can handle form submission logic here.
    console.log(formData)


    // Call the onSubmit prop with the form data
    // onSubmit(formData)
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} >
          <h1>Alumni Form</h1>
        
            {/* Personal Information */}
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
               
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='registrationNo'>
              <Form.Label>Registration No.</Form.Label>
              <Form.Control
                style={{width: '40%'}}
                type='text'
                name='registrationNo'
                value={formData.registrationNo}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='yearOfIntake'>
              <Form.Label>Year of Intake</Form.Label>
              <Form.Control
                type='number'
                name='yearOfIntake'
                value={formData.yearOfIntake}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='degreeProgram'>
              <Form.Label>Degree Program</Form.Label>
              <Form.Control
                type='text'
                name='degreeProgram'
                value={formData.degreeProgram}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='yearOfGraduation'>
              <Form.Label>Year of Graduation</Form.Label>
              <Form.Control
                type='number'
                name='yearOfGraduation'
                value={formData.yearOfGraduation}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            {/* Employment Information */}
            <Form.Group controlId='employed'>
              <Form.Label>Currently Employed</Form.Label>
              <Form.Control
                as='select'
                name='employed'
                value={formData.employed}
                onChange={handleChangeForm}
                required
              >
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </Form.Control>
            </Form.Group>

            {formData.employed === 'Yes' && (
              <>
                <Form.Group controlId='currentEmployer'>
                  <Form.Label>Current Employer</Form.Label>
                  <Form.Control
                    type='text'
                    name='currentEmployer'
                    value={formData.currentEmployer}
                    onChange={handleChangeForm}
                    required
                  />
                </Form.Group>

                <Form.Group controlId='position'>
                  <Form.Label>Current Position</Form.Label>
                  <Form.Control
                    type='text'
                    name='position'
                    value={formData.position}
                    onChange={handleChangeForm}
                    required
                  />
                </Form.Group>

                <Form.Group controlId='industry'>
                  <Form.Label> Current Industry</Form.Label>
                  <Form.Control
                    type='text'
                    name='industry'
                    value={formData.industry}
                    onChange={handleChangeForm}
                    required
                  />
                </Form.Group>

                <Form.Group controlId='employmentPeriod'>
                  <Form.Label>Period of Employment</Form.Label>
                  <Form.Control
                    className='mb-2'
                    type='date'
                    name='firstJobEmploymentPeriod1'
                    value={formData.employmentPeriod1}
                    onChange={handleChangeForm}
                    required
                  />
                  <p>to</p>
                  <Form.Control
                    className='mb-2'
                    type='date'
                    name='firstJobEmploymentPeriod2'
                    value={formData.employmentPeriod2}
                    onChange={handleChangeForm}
                    required
                  />
                </Form.Group>

                <Form.Group controlId='lastSalary'>
                  <Form.Label>Last Drawn Salary</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastSalary'
                    value={formData.lastSalary}
                    onChange={handleChangeForm}
                    required
                  />
                </Form.Group>
              </>
            )}

            {/* Academic Information */}
            <Form.Group controlId='academicSpecialization'>
              <Form.Label>Academic Specialization</Form.Label>
              <Form.Control
                type='text'
                name='academicSpecialization'
                value={formData.academicSpecialization}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='professionalSpecialization'>
              <Form.Label>Professional Specialization</Form.Label>
              <Form.Control
                type='text'
                name='professionalSpecialization'
                value={formData.professionalSpecialization}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='firstJobExperienceYear'>
              <Form.Label>Year of First Job Experience</Form.Label>
              <Form.Control
                type='number'
                name='firstJobExperienceYear'
                value={formData.firstJobExperienceYear}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='firstJobEmploymentPeriod'>
              <Form.Label>Period of First Employment</Form.Label>
              <Form.Control
                className='mb-2'
                type='date'
                name='firstJobEmploymentPeriod1'
                value={formData.firstJobEmploymentPeriod1}
                onChange={handleChangeForm}
                required
              />
              <p>to</p>
              <Form.Control
                className='mb-2'
                type='date'
                name='firstJobEmploymentPeriod2'
                value={formData.firstJobEmploymentPeriod2}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='firstJobSalary'>
              <Form.Label>First Drawn Salary</Form.Label>
              <Form.Control
                type='number'
                name='firstJobSalary'
                value={formData.firstJobSalary}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            {/* Contact Information */}
            <Form.Group controlId='personalEmail'>
              <Form.Label>Personal Email</Form.Label>
              <Form.Control
                type='email'
                name='personalEmail'
                value={formData.personalEmail}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            <Form.Group controlId='mobileContact'>
              <Form.Label>Mobile Contact</Form.Label>
              <Form.Control
                type='number'
                name='mobileContact'
                value={formData.mobileContact}
                onChange={handleChangeForm}
                required
              />
            </Form.Group>

            
        </Col>
      </Row>
    </Container>
  )
}

export default AlumniForm
