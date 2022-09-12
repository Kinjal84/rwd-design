import React from "react";
import "../styles/PrimaryForm.scss";
import "../styles/FormikForm.scss"
import { Formik, Form, Field  } from "formik";
import * as Yup from "yup";


import { country } from "../../../shared/constants/constants";
import { State } from "../../../shared/constants/constants";

const Formikform = () => {
	
	const ValidationSchema = Yup.object().shape({
		firstName: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("First Name is Required!"),
		lastName: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Last Name is Required!"),
		gender: Yup.string().required("gender is required!"),
		email: Yup.string().required().email(),
		phoneNumber: Yup.number()
		.min(10, "Must be more than 10 characters")
		.required("This field is requried"),
		state: Yup.string().required(),
        country: Yup.string().required(),
	});

	
	return (
		<div className="formik-form">
			<div className="container">

				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
                        country: '',
						email: '',
						phoneNumber: '',
                        gender: 'male',
						state: '',
						emailNotification: true,
						mobileNotification: true,
                        
					}}
					validationSchema={ValidationSchema}
					onSubmit={(values, {resetForm}) => {
						console.log(values);
						alert("Your data has been recorded");
						resetForm({values: ''});
						

					}}>
					{({ errors, touched, values}) => (
						<Form >
							<div className="forms">
								<div className="form1">
									<div className="form-title">
										<h3>Primary Form</h3>
									</div>
									<Field
										name="firstName"
										className="form-control"
										placeholder="firstname"
									/>
									{errors.firstName && touched.firstName ? (
										<div className="error">{errors.firstName}</div>
									) : null}
									<Field
										name="lastName"
										className="form-control"
										placeholder="lastname"
									/>
									{errors.lastName && touched.lastName ? (
										<div className="error">{errors.lastName}</div>
									) : null}
									<Field
										name='country'
										className='form-control'
										as='select'>
										<option className='placeholder' value=''>
											Select country
										</option>
										{country.map((country, index) => (
											
											<option
											
												value={country.id}
												id={country.id}
												key={index}>
												{country.name}
											</option>
										
										))}
									</Field>
									{errors.country && touched.country ? (
										<div className="error">{errors.country}</div>
									) : null}
									<Field name="email"
										className="form-control"
										placeholder="email-address" />
									{errors.email && touched.email ? (
										<div className="error">{errors.email}</div>
									): null}
									<Field name="phoneNumber"
									type='number'
										className="form-control"
										placeholder="Phone Number" />
									{errors.phoneNumber && touched.phoneNumber ? (
										<div className="error">{errors.phoneNumber}</div>
									): null}

									 <div className='gender-main'>
									 	<label htmlFor='gender'>Gender</label>
										 <div className='gender'>
										 	<div className='radio-btn'>
												<Field type="radio" name="gender" value="male" id="male" className='radio-input' />
												
												<label htmlFor='male' id='male'>
                                            	Male
                                        		</label>
												
											</div>
											<div className='radio-btn'>
												<Field type="radio" name="gender" value="female" id="female" className='radio-input'/>
												<label htmlFor='female' id='female'>
                                            	Female
                                        		</label>
											</div>
										 </div>

									</div>
								</div>
							
							<div className="form1">
									<div className="form-title">
										<h3>Secondary Form</h3>
									</div>
							<Field
                                    name='state'
                                    className='form-control'
									as='select'
                                   >
                                    <option className='placeholder' value=''>
                                        Select state
                                    </option>
									{State.map((state, index) => {
										
										if(state.country_id.toString() === values.country){
											return (
											<option
												value={state.name}
												key={index}>
												{state.name}
											</option>)

										}

									})}
                                </Field>
								{errors.state && touched.state ? (
										<div className="error">{errors.state}</div>
									) : null}
								<div className="email-notification">

								<label
                                    htmlFor='email-notification'
                                    className='toggle-label'>
                                    Send email notification
                                </label>
                                
                                    <Field
                                        className='switch'
                                        type="checkbox"
                                        name='emailNotification'
										
                                        
                                    />
								</div>
								<div className="email-notification">
									<label
                                    htmlFor='mobile-notification'
                                    className='toggle-label'>
                                    Send mobile notification
                                </label>
                                
                                    <Field
                                        className='switch'
                                        type="checkbox"
                                        name='mobileNotification'
                                    />

								</div>
                               
								</div>
							</div>
							<div className='submit-btn'>
							<button type="submit" className="button">Submit</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Formikform;
