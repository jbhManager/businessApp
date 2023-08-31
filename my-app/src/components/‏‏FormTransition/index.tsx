import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import apiRequest from '../../tools/RestApi';
import API from '../../Api';
import styles from './style.module.css';
import { TransitionsWithNoId } from './../../model/transitionModel';


type FormTransitionProps = {
  setShowFormTransition: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormTransition: React.FC<FormTransitionProps> = ({ setShowFormTransition }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransitionsWithNoId>();

  const onSubmit: SubmitHandler<TransitionsWithNoId> = (data) => {
    // apiRequest('/users', 'POST', data)
    //   .then((response) => {
    //     console.log('create user ', response);
    //     setShowForm(false);
    //   })
    //   .catch((error) => {
    //     console.log('error = ', error);
    //   });
    API.transitionService.createTransition(data).then(transition => {
      console.log("Transition: %j", transition)
      setShowFormTransition(false);
    })
  };

  return (
    <div className={styles['form-container']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <p>name is required.</p>}
        <label htmlFor="city">City:</label>
        <input type="text" id="city" {...register('city', { required: true })} />
        {errors.city && <p>city is required.</p>}
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" {...register('country', { required: true })} />
        {errors.country && <p>country is required.</p>}
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" {...register('street', { required: true })} />
        {errors.street && <p>street is required.</p>}
        <label htmlFor="zip_code">Zip Code:</label>
        <input type="text" id="zip_code" {...register('zip_code')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormTransition;

