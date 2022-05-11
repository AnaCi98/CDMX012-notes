// Este contiene hook para cambiar de estado
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNote from '../firebase/firebaseAuth';

const navigate = useNavigate();
const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };
  const submit = async () => {
    createNote(values);
    navigate('/');
  };

  return {
    submit,
    handleChange,
  };
};

export const useFormLogin = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };
  const submit = async () => {
    createNote(values);
    navigate('/');
  };

  return {
    submit,
    handleChange,
  };
};

export default useForm;
