import React from 'react'
import { Button, TextField } from '@mui/material'
import './App.css'
import { useForm } from 'react-hook-form'
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
            {...register('firstName', { required: 'Это обязательное поле!' })}
            helperText={errors.firstName && errors.firstName.message}
            error={!!errors.firstName}
          />
          <TextField
            name="lastName"
            label="Фамилия"
            className="right"
            {...register('lastName', { required: 'Это обязательное поле!' })}
            helperText={errors.lastName && errors.firstName.message}
            error={!!errors.lastName}
          />
        </div>
        <div className="row">
          <TextField
            name="email"
            label="E-Mail"
            className="right"
            {...register('email', {
              required: 'Это обязательное поле!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: 'Введите корректный E-Mail',
              },
            })}
            helperText={errors.email && errors.email.message}
            error={!!errors.email}
          />
          <TextField
            name="password"
            label="Пароль"
            className="right"
            type="password"
            {...register('password', { required: 'Это обязательное поле!' })}
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
        <Button variant="contained" className="button" color="error">
          Очистить
        </Button>
      </form>
    </div>
  )
}
export default App
