'use-client';
import React from 'react'
import {
    Drawer,
    Button,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
   
function Drawaire() {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
   
  return (
    <>
    
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            open
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
  
    </>
  )
}

export default Drawaire