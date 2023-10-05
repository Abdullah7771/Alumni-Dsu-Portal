import React, {ReactEventHandler, useEffect, useState} from 'react'
import RangeSlider from './RangeSlider'
import 'animate.css'
import CreatableSelect from 'react-select/creatable'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import {number} from 'yup'
import axios from 'axios'
import PriorityForm from './components/PriorityForm'
import AlumniForm from './components/AlumniInformation'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Option {
  id: number
  text: string
  priority?: number
}

const localid = localStorage.getItem('sub')

interface Question {
  id: number
  text?: string
  options: Option[]
  isCreatableSelect?: boolean
  isPriority?: boolean
  isGradeTrue?: boolean
  isNumberTrue?: boolean
  isSelectableTrue?: boolean
  heading?: string
}

interface SurveyFormProps {
  onSubmit: (
    answers: Record<number | string, string>,
  ) => void
  setFormFilled: (filled: boolean) => void
}

const SurveyForm: React.FC<SurveyFormProps> = ({onSubmit, setFormFilled}) => {
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
  const [priorities, setPriorities] = useState([0, 0, 0, 0, 0])
  const postSurveyForm = async (data: any) => {
    try {
      const response = await axios.post(
        `https://amsbackend-ghub.onrender.com/survey/${localid}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      console.log(response.data) // This will log the response data from the server.
    } catch (error) {
      console.error(error) // Handle any errors that occur during the request.
    }
  }

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      heading: 'Knowledge',
      text: 'Management,Math,Engineering skills(if applicable), \nA-F with A being best and F being poor',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 2,
      text: 'Problem Identification and solving skills ',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 3,
      text: 'Ability to Evaluate and Analyze Data ',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 4,
      text: 'Research Skills',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 5,
      text: 'Ability to link theory to practice',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 6,
      text: 'Ability to design a system component or process',
      options: [],
      isGradeTrue: true,
    },

    {
      id: 7,
      text: 'IT knowledge/Computer Skills',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 8,
      heading: 'Communication Skills',
      text: 'Oral Communication',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 9,
      text: 'Report Writing',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 10,
      text: 'Presentation Skills',
      options: [],
      isGradeTrue: true,
    },

    {
      id: 11,
      heading: 'Teamwork',
      text: 'Ability to work in teams',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 12,
      text: 'Ability to work in challenging situations',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 13,
      text: 'Independant Thinking',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 14,
      text: 'Appreciation of Ethical Values',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 15,
      heading: 'Management/Leadership Skills',
      text: 'Resource and Time Management Skills',
      options: [],
      isGradeTrue: true,
    },

    {
      id: 16,
      text: 'Judgement',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 17,
      text: 'Discipline ',
      options: [],
      isGradeTrue: true,
    },

    {
      id: 18,
      heading: 'Career Opportunities',
      text: 'Did the curriculum at DSU teach you the skills most relevant to your field of specialization in the job market?',
      options: [
        {id: 1, text: 'Yes'},
        {id: 2, text: 'No'},
      ],
    },
    {
      id: 19,
      text: 'Are You Employed in the field of your DSU degree?If not why(Choose 1 response)',
      options: [
        {id: 1, text: 'Yes, I am employed in my major field'},
        {id: 2, text: 'No, I developed new Career interests'},
        {id: 3, text: 'No, I could not find a job in my major'},
        {id: 4, text: 'No, I am not presently employed out of choice'},
        {id: 5, text: 'No, I am not presently employed due to unavailability of suitable job'},
        {id: 6, text: 'No, The jobs in my field did not pay me well'},
      ],
      isSelectableTrue: true,
    },
    {
      id: 20,
      text: 'Which of the following activities appeal to you as an opportunity to stay connected to DSU? Please rate in order of importance from 1-5 with 1 being most important and 5 least important)',
      options: [{id: 1, text: 'E-Newsletter'}],
      isPriority: true,
    },
    {
      id: 21,
      text: '',
      options: [{id: 1, text: 'Class Reunions'}],
      isPriority: true,
    },
    {
      id: 22,
      text: '',
      options: [{id: 1, text: 'Program/Major Reunions'}],
      isPriority: true,
    },
    {
      id: 23,
      text: '',
      options: [{id: 1, text: 'Regional Activities'}],
      isPriority: true,
    },
    {
      id: 24,
      text: '',
      options: [{id: 1, text: 'Annual Campus'}],
      isPriority: true,
    },
    {
      id: 25,
      text: 'Please type the skills that you acquired from our university that helped you in your professional life.',
      options: [],
      isCreatableSelect: true,
    },

    {
      id: 26,
      heading: 'Department Status',
      text: 'Infrastructure',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 27,
      text: 'Faculty',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 28,
      text: 'Academics ',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 29,
      text: 'Repute at National level',
      options: [],
      isGradeTrue: true,
    },
    {
      id: 30,
      text: 'Repute at International level',
      options: [],
      isGradeTrue: true,
    },
  ])

  const [answers, setAnswers] = useState<Record<number | string, string>>({})

  const [tagsArr, setTagsArr] = useState<string[]>([])

  const handleOptionChange = (questionId: number | string, selectedOption: string) => {
    console.log(selectedOption)

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ['q' + questionId]: selectedOption,
    }))
  }

  const handleSelectChange = (questionId: number | string, selectedOption: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ['q' + questionId]: selectedOption,
    }))
  }

  useEffect(() => {
    console.log(tagsArr)
  }, [tagsArr])

  const handleTagsChange = (questionId: number | string, selectedOptions: any | Object) => {
    const updatedTags = selectedOptions.map((option: any) => ({
      label: option.label,
      value: option.value,
    }))

    setTagsArr(updatedTags)

    const strTags = updatedTags.map((item: any) => item.value).join(',')
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ['q' + questionId]: strTags,
    }))
  }

  const [grade, setGrade] = useState('')
  const [inp, setInp] = useState<number>()
  const handleGradeChange = (questionId: number | string, grade: string) => {
    // Handle the grade value in the parent component

    console.log(questionId, grade)

    setGrade(grade)
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ['q' + questionId]: grade,
    }))
  }
  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    if(name=="firstJobSalary" || name=="lastSalary"){
      setFormData({...formData, [name]: Number(value)})
    }
    else{
    setFormData({...formData, [name]: value})
    }
  }

  const handlePriority = (questionId: number, priority: number) => {
    setPriorities((prevPriorities: any) => {
      const newPriorities = [...prevPriorities]

      newPriorities[questionId] = priority

      // Disable the selected priority for other questions.
      for (let i = 0; i < newPriorities.length; i++) {
        if (i !== questionId && newPriorities[i] === priority) {
          newPriorities[i] = 0
        }
      }

      return newPriorities
    })

    console.log(priority)
    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      ['q' + questionId]: priority,
    }))
  }

  const handleInp = (questionId: number | string, value: number) => {
    // Handle the grade value in the parent component
    console.log(value, questionId)

    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      ['q' + questionId]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(answers, grade, formData)
    const isAnswersNotEmpty = Object.keys(answers).length > 0

    const isRangeSliderValid = Object.values(answers).every(
      (value) => value != undefined && value != ''
    )
   
    const priorityQuestions = questions.filter((question) => question.isPriority)
    const hasPriorities = priorityQuestions.every(
      (question) => priorities[question.id] !== undefined && priorities[question.id] !== 0
    )

    console.log(priorities)

    if (
      isRangeSliderValid &&
      isAnswersNotEmpty &&
      hasPriorities &&
      Object.keys(answers).length === questions.length
    ) {
      let mergeObj = {...answers, ...formData}
      console.log(mergeObj)
      onSubmit(mergeObj)

      postSurveyForm(mergeObj)
      setTimeout(() => setFormFilled(true), 3000)
    } else {
      toast('Select all answers..')
    }
  }

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        <p className='fs-6 text-center font-weight-bold animate__animated animate__fadeInLeft'>
          {' '}
          (To be filled by Alumni - after the completion of each academic year).The purpose of this
          survey is to obtain alumni input on the quality of education they received and the level
          of preparation they had at University.The purpose of this survey is tpo assess the quality
          of the acadmeic program. We seek your help in completing this survey.
        </p>
        <br />
        {questions.map((question) => (
          <div>
            {question.heading ? (
              <h3 className=' text-primary fw-bolder text-decoration-underline mb-4 animate__animated animate__slideInLeft'>
                {question.heading}
              </h3>
            ) : null}
            {question.text ? (
              <label className='d-flex align-items-center fs-6 fw-semibold mb-3'>
                <p className='required fs-5'>
                  {' '}
                  {question.id} : {question.text}
                </p>
              </label>
            ) : null}

            {question.isCreatableSelect ? (
              <CreatableSelect
                name={`question-${question.id}`}
                value={tagsArr}
                isMulti
                className='mb-4'
                onChange={(arr) => handleTagsChange(question.id, arr)}
                placeholder='Input additional info if required'
                required
              />
            ) : question.isGradeTrue ? (
              <>
                <div className='container mt-4 mb-4'>
                  <div className='progress' style={{height: '40px'}}>
                    <div
                      className='progress-bar bg-danger'
                      style={{
                        width: '20%',
                        backgroundColor: 'red',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      Poor
                    </div>
                    <div
                      className='progress-bar bg-warning'
                      style={{
                        width: '20%',
                        backgroundColor: '#ff8c00',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      Fair
                    </div>

                    <div
                      className='progress-bar '
                      style={{
                        width: '20%',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: 'grey',
                      }}
                    >
                      Average
                    </div>

                    <div
                      className='progress-bar bg-info'
                      style={{
                        width: '20%',
                        backgroundColor: 'orange',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      Good
                    </div>

                    <div
                      className='progress-bar bg-primary'
                      style={{
                        width: '20%',
                        backgroundColor: 'blue',
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      Very Good
                    </div>

                    <div
                      className='progress-bar bg-success'
                      style={{width: '20%', fontWeight: 'bold', color: '#fff'}}
                    >
                      Excellent
                    </div>
                  </div>
                </div>
                <RangeSlider
                  name='Rating'
                  value={grade}
                  onGradeChange={(updatedGrade) => handleGradeChange(question.id, updatedGrade)}
                />
              </>
            ) : question.isNumberTrue ? (
              <>
                <div className='text-center mb-5'>
                  <input
                    className='form-control form-control-flush'
                    type='number'
                    style={{width: '300px'}}
                    value={inp}
                    placeholder='Enter figure here'
                    required
                    onBlur={(inp: any) => handleInp(question.id, inp.target.value)}
                  />
                </div>
              </>
            ) : question.isSelectableTrue ? (
              <>
                <div className='text-center mb-5'>
                  <select
                    className='form-select'
                    name='select'
                    id=''
                    onChange={(e) => {
                      handleSelectChange(question.id, e.target.value)
                    }}
                  >
                    {question.options.map((option) => (
                      <>
                        <option value={option.text}>{option.text}</option>
                      </>
                    ))}
                  </select>
                  <div className='text-center mt-2 mb-2'>
                    {!answers['q' + question.id] && (
                      <div className='text-danger fs-5'>Please select a value.</div>
                    )}
                  </div>
                </div>
              </>
            ) : question.isPriority ? (
              <div>
                {question.options.map((option) => (
                  <>
                    <p className='align-items-center fs-6 fw-semibold mb-3'>{option.text}</p>
                    <select
                      className='form-select mb-2'
                      value={priorities[question.id]}
                      onChange={(event) =>
                        handlePriority(question.id, parseInt(event.target.value))
                      }
                    >
                      <option value='0'>Select priority</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                  </>
                ))}
              </div>
            ) : (
              <>
                <div key={question.id} className='d-flex flex-row justify-content-evenly'>
                  {question.options.map((option) => (
                    <button
                      type='button'
                      className={`btn bg-secondary ms-4 btn-light-primary mb-2 ${
                        answers['q' + question.id] === option.text ? 'active' : ''
                      }`}
                      style={{width: '30%'}}
                      data-kt-modal-bidding='option'
                      onClick={() => handleOptionChange(question.id, option.text)}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
                <div className='text-center mt-2 mb-2'>
                  {!answers['q' + question.id] && (
                    <div className='text-danger fs-5'>Please select a value.</div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}

        <Container className='border border-primary rounded-end pb-4 '>
          <h1 className='text-center mt-4 mb-4'>Alumni Form</h1>
          <Row>
            <Col md={6}>
              {/* Personal Information */}
              <Form.Group className='mb-2' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChangeForm}
                  placeholder='Name'
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2' controlId='registrationNo'>
                <Form.Label>Registration No.</Form.Label>
                <Form.Control
                  type='text'
                  name='registrationNo'
                  placeholder='E.G BBA201929'
                  value={formData.registrationNo}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2' controlId='yearOfIntake'>
                <Form.Label>Year of Intake</Form.Label>
                <Form.Control
                  type='number'
                  name='yearOfIntake'
                  placeholder='Year of Admission'
                  value={formData.yearOfIntake}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='degreeProgram'>
                <Form.Label>Degree Program</Form.Label>
                <Form.Control
                  type='text'
                  name='degreeProgram'
                  placeholder='E.g SE,BBA,ME '
                  value={formData.degreeProgram}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2' controlId='yearOfGraduation'>
                <Form.Label>Year of Graduation</Form.Label>
                <Form.Control
                  type='number'
                  name='yearOfGraduation'
                  placeholder='Graduation Year'
                  value={formData.yearOfGraduation}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='employed'>
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
            </Col>

            {formData.employed === 'Yes' && (
              <>
                <Col md={6}>
                  <Form.Group className='mb-2' controlId='currentEmployer'>
                    <Form.Label>Current Employer</Form.Label>
                    <Form.Control
                      type='text'
                      name='currentEmployer'
                      placeholder='Current Company'
                      value={formData.currentEmployer}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className='mb-2' controlId='position'>
                    <Form.Label>Current Position</Form.Label>
                    <Form.Control
                      type='text'
                      name='position'
                      placeholder='Position in Current Company'
                      value={formData.position}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className='mb-2' controlId='industry'>
                    <Form.Label> Current Industry</Form.Label>
                    <Form.Control
                      type='text'
                      name='industry'
                      placeholder='Nature of Business'
                      value={formData.industry}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className='mb-2' controlId='lastSalary'>
                    <Form.Label>Last Drawn Salary</Form.Label>
                    <Form.Control
                      type='text'
                      name='lastSalary'
                      placeholder='Last Salary'
                      value={formData.lastSalary}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className='mb-2' controlId='employmentPeriod1'>
                    <Form.Label>Period of Employment</Form.Label>
                    <Form.Control
                      className='mb-2'
                      type='date'
                      name='employmentPeriod1'
                      value={formData.employmentPeriod1}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className='mb-2'>
                    <Form.Label>Upto</Form.Label>
                    <Form.Control
                      className='mb-4'
                      type='date'
                      name='employmentPeriod2'
                      value={formData.employmentPeriod2}
                      onChange={handleChangeForm}
                      required
                    />
                  </Form.Group>
                </Col>
              </>
            )}

            <Col md={6}>
              <Form.Group className='mb-2' controlId='academicSpecialization'>
                <Form.Label>Academic Specialization</Form.Label>
                <Form.Control
                  type='text'
                  name='academicSpecialization'
                  placeholder='Academic Expertise'
                  value={formData.academicSpecialization}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='professionalSpecialization'>
                <Form.Label>Professional Specialization</Form.Label>
                <Form.Control
                  type='text'
                  name='professionalSpecialization'
                  placeholder='Professional Expertise'
                  value={formData.professionalSpecialization}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='firstJobExperienceYear'>
                <Form.Label>Year of First Job Experience</Form.Label>
                <Form.Control
                  type='number'
                  name='firstJobExperienceYear'
                  placeholder='Year of First Job Experience(Optional)'
                  value={formData.firstJobExperienceYear}
                  onChange={handleChangeForm}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2' controlId='firstJobSalary'>
                <Form.Label>First Drawn Salary</Form.Label>
                <Form.Control
                  type='number'
                  name='firstJobSalary'
                  placeholder='First Salary(Optional)'
                  value={formData.firstJobSalary}
                  onChange={handleChangeForm}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='firstJobEmploymentPeriod'>
                <Form.Label>Period of First Employment</Form.Label>
                <Form.Control
                  className='mb-2'
                  type='date'
                  name='firstJobEmploymentPeriod1'
                  value={formData.firstJobEmploymentPeriod1}
                  onChange={handleChangeForm}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2'>
                <Form.Label>Upto</Form.Label>
                <Form.Control
                  type='date'
                  name='firstJobEmploymentPeriod2'
                  value={formData.firstJobEmploymentPeriod2}
                  onChange={handleChangeForm}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-2' controlId='personalEmail'>
                <Form.Label>Personal Email</Form.Label>
                <Form.Control
                  type='email'
                  name='personalEmail'
                  placeholder='Primary Email'
                  value={formData.personalEmail}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-2' controlId='mobileContact'>
                <Form.Label>Mobile Contact</Form.Label>
                <Form.Control
                  type='number'
                  name='mobileContact'
                  placeholder='Contact Number'
                  value={formData.mobileContact}
                  onChange={handleChangeForm}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <div className='text-center mt-5'>
          <button type='submit' className='btn btn-primary mt-3 '>
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default SurveyForm
