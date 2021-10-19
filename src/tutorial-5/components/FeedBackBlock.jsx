import React from 'react'
import style from './FeedBack.module.css'
import { Box, Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import List from '@mui/material/List'
import Review from './Review'

const FeedBackBlock = () => {
  let commentsObj = {
    fullName: '',
    email: '',
    createdAt: new Date().toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    text: '',
  }
  const [comments, setComments] = React.useState([])

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  React.useEffect(() => {
    let localStorageArr = JSON.parse(localStorage.getItem('comments'))
    if (localStorageArr.length) {
      setComments([localStorageArr])
    } else {
      setComments([])
    }
  }, [])

  let handleChangeInputs = (event) => {
    const { value, name } = event.target
    switch (name) {
      case 'fullName':
        commentsObj.fullName = value.trim()
        break
      case 'email':
        commentsObj.email = value.trim()
        break
      case 'text':
        commentsObj.text = value.trim()
        break
      default:
        break
    }
  }
  let handleRemoveReview = (index) => {
    setComments(comments.filter((_, i) => i !== index))
  }
  let handleSubmit = (event) => {
    event.preventDefault()
    if (commentsObj.fullName && commentsObj.text && commentsObj.email) {
      setComments((prev) => [...prev, commentsObj])
      event.target.reset()
    } else {
      alert('Заполните все поля!')
    }
  }
  let reviewsList = comments.map((el, i) => (
    <Review
      key={el.fullName}
      index={i}
      fullName={el.fullName}
      text={el.text}
      removeReview={handleRemoveReview}
      date={el.createdAt}
    />
  ))

  return (
    <>
      <div className={style.feedBackBlock}>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <h2>Отзывы: </h2>
          {!comments.length ? 'Нет отзывов' : reviewsList}
        </List>
      </div>
      <div className={style.feedBackBlock}>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h2>Обратная связь: </h2>

          <TextField
            onChange={handleChangeInputs}
            name="fullName"
            id="outlined-textarea"
            label="Имя"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            onChange={handleChangeInputs}
            name="email"
            id="outlined-textarea"
            label="Почта"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            onChange={handleChangeInputs}
            name="text"
            id="outlined-multiline-static"
            label="Текст..."
            multiline
            rows={3}
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Отправить
          </Button>
        </Box>
      </div>
    </>
  )
}

export default FeedBackBlock
