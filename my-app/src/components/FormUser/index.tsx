import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import apiRequest from '../../tools/RestApi';
import API from '../../Api';
import styles from './style.module.css';
import { UserWithNoId } from 'jbhmanager';

type FormUserProps = {
  setShowFormUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormUser: React.FC<FormUserProps> = ({ setShowFormUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserWithNoId>();

  const onSubmit: SubmitHandler<UserWithNoId> = (data) => {
    // apiRequest('/users', 'POST', data)
    //   .then((response) => {
    //     console.log('create user ', response);
    //     setShowForm(false);
    //   })
    //   .catch((error) => {
    //     console.log('error = ', error);
    //   });
    API.userService.createUser(data).then(user => {
      console.log("User: %j", user)
      setShowFormUser(false);
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

export default FormUser;

