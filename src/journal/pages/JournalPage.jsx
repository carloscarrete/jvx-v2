import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import { NothingSelected, NoteView } from '../views/'

const JournalPage = () => {
  return (
    <JournalLayout>

      {/*       <NothingSelected />
 */}
      <NoteView />
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main', ':hover':{backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >

        <AddOutlined sx={{fontSize: 30}}/>

      </IconButton>
    </JournalLayout>





    /* NothingSelected */
    /* NoteView */
  )
}

export default JournalPage