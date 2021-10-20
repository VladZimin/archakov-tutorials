import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Review = ({ fullName, text, removeReview, index, date }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={fullName}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {text}
            </Typography>
            {' - ' + date}
          </>
        }
      />
      <Button onClick={() => removeReview(index)} color="error">
        X
      </Button>
    </ListItem>
  )
}

export default Review
