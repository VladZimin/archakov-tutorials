import React from 'react'
import { Button, TextField } from '@mui/material'
import './App.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const App = () => {
  const schema = yup.object({
    firstName: yup.string().min(2, 'Слишком короткое имя!'),
    lastName: yup.string().min(2, 'Слишком короткое имя!'),
    email: yup
      .string()
      .email('Неправильная почта')
      .required('Заполните E-Mail'),
    password: yup
      .string()
      .min(6, 'Пароль должен быть более 6 символов')
      .max(20, 'Пароль должен быть менее 20 символов'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  const handleClearInputs = () => {
    reset()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            className="right"
            {...register('firstName')}
            helperText={errors.firstName && errors.firstName.message}
            error={!!errors.firstName}
          />
          <TextField
            name="lastName"
            label="Фамилия"
            className="right"
            {...register('lastName')}
            helperText={errors.lastName && errors.firstName.message}
            error={!!errors.lastName}
          />
        </div>
        <div className="row">
          <TextField
            name="email"
            label="E-Mail"
            className="right"
            {...register('email')}
            helperText={errors.email && errors.email.message}
            error={!!errors.email}
          />
          <TextField
            name="password"
            label="Пароль"
            className="right"
            type="password"
            {...register('password')}
            helperText={errors.password && errors.password.message}
            error={!!errors.password}
          />
        </div>
        <Button
          type="onSubmit"
          variant="contained"
          className="button"
          color="primary"
        >
          Отправить
        </Button>
        <Button
          onClick={handleClearInputs}
          variant="contained"
          className="button"
          color="error"
        >
          Очистить
        </Button>
      </form>
    </div>
  )
}
export default App
