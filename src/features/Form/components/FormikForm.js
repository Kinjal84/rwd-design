import React from "react";
import "../styles/PrimaryForm.scss";
import "../styles/FormikForm.scss"
import { Formik, Form, Field  } from "formik";
import * as Yup from "yup";
// import { useState } from "react";

const Formikform = () => {
	// const [selectedCountry, setSelectedCountry] = useState();

	const country = [
		{
			id: 1,
			name: "India",
		},
		{
			id: 2,
			name: "Usa",
		},
		{
			id: 3,
			name: "Canada",
		},
	];
	const State = [
		{
			id: 1,
			name: "Delhi",
			country_id: 1,
		},
		{
			id: 2,
			name: "Ahemdabad",
			country_id: 1,
		},
		{
			id: 3,
			name: "Chennai",
			country_id: 1,
		},
		{
			id: 4,
			name: "Texas",
			country_id: 2,
		},
		{
			id: 5,
			name: "Alaska",
			country_id: 2,
		},
		{
			id: 6,
			name: "Ohio",
			country_id: 2,
		},
		{
			id: 7,
			name: "Florida",
			country_id: 2,
		},
		{
			id: 8,
			name: "Nova Scotia",
			country_id: 3,
		},
		{
			id: 9,
			name: "Nova Scotia",
			country_id: 3,
		},
		{
			id: 10,
			name: "Quebec",
			country_id: 3,
		},
		{
			id: 11,
			name: "Torento",
			country_id: 3,
		},
	];

    // const availableState = State.filter((c) => c.country_id == selectedCountry);
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
						// same shape as initial values
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
										{country.map((country) => (
											
											<option
											
												value={country.id}
												id={country.id}
												key={country.id}>
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
									{State.map((state) => {
										
										if(state.country_id == values.country){
											return (
											<option
												value={state.name}
												key={state.id}>
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
                                {/* </div> */}
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
