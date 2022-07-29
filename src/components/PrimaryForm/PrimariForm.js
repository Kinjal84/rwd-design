import { React, useEffect, useState } from 'react';
import '../PrimaryForm/PrimaryForm.scss';
import { useForm } from 'react-hook-form';

export default function Form() {
    const [selectedCountry, setSelectedCountry] = useState();
    const [isOff, setIsOff] = useState(true);
    const [isMobile, setIsMobile] = useState(true);
    // const [countryId, setCountryId] = useState(null);

    const country = [
        {
            id: 1,
            name: 'India',
        },
        {
            id: 2,
            name: 'Usa',
        },
        {
            id: 3,
            name: 'Canada',
        },
    ];
    const State = [
        {
            id: 1,
            name: 'Delhi',
            country_id: 1,
        },
        {
            id: 2,
            name: 'Ahemdabad',
            country_id: 1,
        },
        {
            id: 3,
            name: 'Chennai',
            country_id: 1,
        },
        {
            id: 4,
            name: 'Texas',
            country_id: 2,
        },
        {
            id: 5,
            name: 'Alaska',
            country_id: 2,
        },
        {
            id: 6,
            name: 'Ohio',
            country_id: 2,
        },
        {
            id: 7,
            name: 'Florida',
            country_id: 2,
        },
        {
            id: 8,
            name: 'Nova Scotia',
            country_id: 3,
        },
        {
            id: 9,
            name: 'Nova Scotia',
            country_id: 3,
        },
        {
            id: 10,
            name: 'Quebec',
            country_id: 3,
        },
        {
            id: 11,
            name: 'Torento',
            country_id: 3,
        },
    ];


    
    useEffect(() => {
        setIsOff(false);
    }, [isOff]);

    const {
        register,

        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        e.target.reset();
    };

    const onChangeHandler = (event) => {
        const value = event.target.value;
        setSelectedCountry(value);

        // const index = e.target.selectedIndex;
        // const el = e.target.childNodes[index];
        // const option = el.getAttribute('id');
        // console.log(option);
    };
    const availableState = State.filter((c) => c.country_id == selectedCountry);

    return (
        <div className='primary-form'>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='forms'>
                        <div className='form1'>
                            <div className='form-title'>
                                <h3>Primary Form</h3>
                            </div>

                            <input
                                placeholder='First Name'
                                className='form-control'
                                {...register('name', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                            />
                            <p className='error'>
                                {errors.name?.type === 'required' &&
                                    'Name is required !'}
                                {errors.name?.type === 'minLength' &&
                                    'Name should have at list 3 charactor !'}
                                {/* {errors.name?.type <= 'maxLength' &&
                                    'Name should have at most 30 charactor !'} */}
                            </p>

                            <input
                                placeholder='Last Name'
                                className='form-control'
                                {...register('lname', {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 30,
                                })}
                            />
                            <p className='error'>
                                {errors.lname?.type === 'required' &&
                                    'Last Name is required !'}
                                {errors.lname?.type === 'minLength' &&
                                    'Last name should have at list 3 charactor !'}
                                {/* {errors.lname?.type <= 'maxLength' &&
                                    'Last name should have at most 30 charactor !'} */}
                            </p>
                            <select
                                {...register('country', { required: true })}
                                className='form-control'
                                onChange={onChangeHandler}>
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
                            </select>
                            {errors.country && (
                                <p className='error'>Country Required!</p>
                            )}
                            <input
                                placeholder='Email'
                                className='form-control'
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                })}
                            />
                            <p className='error'>
                                {errors.email?.type === 'required' &&
                                    'Email is required !'}
                                {errors.email?.type === 'pattern' &&
                                    'Entered email is in wrong format !'}
                            </p>
                            <input
                                type='number'
                                placeholder='Phone Number'
                                className='form-control'
                                {...register('number', {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 10,
                                })}
                            />
                            <p className='error'>
                                {errors.number?.type === 'required' &&
                                    'Number is required !'}
                                {errors.number?.type === 'minLength' &&
                                    'Entered number is less than 10 digits !'}
                                {errors.number?.type === 'maxLength' &&
                                    'Entered number is more than 10 digits !'}
                            </p>
                            <div className='gender-main'>
                                <label htmlFor='gender'>Gender</label>
                                <div className='gender'>
                                    <div className='radio-btn'>
                                        <input
                                            type='radio'
                                            id='male'
                                            name='gender'
                                            value={'male'}
                                            defaultChecked
                                            className='radio-input'
                                            {...register('gender', {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor='male' id='male'>
                                            Male
                                        </label>
                                    </div>
                                    <div className='radio-btn'>
                                        <input
                                            type='radio'
                                            id='female'
                                            name='gender'
                                            value='female'
                                            className='radio-input'
                                            {...register('gender', {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor='female' id='female'>
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <p className='error'>
                                {errors.gender?.type === 'required' &&
                                    'Number is required !'}
                            </p>
                        </div>
                        <div className='form1'>
                            <div className='form-title'>
                                <h3>Secondary Form</h3>
                            </div>
                            <div className='state'>
                                <select
                                    name='state'
                                    className='form-control'
                                    {...register('state', { required: true })}>
                                    <option className='placeholder' value=''>
                                        Select state
                                    </option>
                                    {availableState.map((state) => (
                                        <option
                                            value={state.name}
                                            key={state.id}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className='error'>
                                {errors.state?.type === 'required' &&
                                    'State is required !'}
                            </p>

                            <div className='email-notification'>
                                <label
                                    htmlFor='email-notification'
                                    className='toggle-label'>
                                    Send email notification
                                </label>
                                <div>
                                    <input
                                        {...register('email-notification', {
                                            required: true,
                                        })}
                                        className='switch'
                                        type='checkbox'
                                        name='email-notification'
                                        defaultChecked
                                        value={isOff}
                                        onClick={() => {
                                            setIsOff(!isOff);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='email-notification'>
                                <label
                                    htmlFor='email-notification'
                                    className='toggle-label'>
                                    Send mobile notification
                                </label>
                                <div>
                                    <input
                                        {...register('mobile-notification', {
                                            required: true,
                                        })}
                                        className='switch'
                                        type='checkbox'
                                        name='mobile-notification'
                                        defaultChecked
                                        value={isMobile}
                                        onClick={() => setIsMobile(!isMobile)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='submit-btn'>
                        <button className='button' type='submit'>
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
