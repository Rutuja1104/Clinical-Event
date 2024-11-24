import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type LabelValuePair={
    label:string,
    onClickCb:()=>void,
}

type MenuDropwdownPropsType={
    options?:LabelValuePair[]|[];
}

const MenuDropdown=({options=[]}:MenuDropwdownPropsType)=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: '20ch',
            },
          },
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        {options.map((option:any,index:number) => (
          <MenuItem key={`${option?.label}-${index}`} onClick={()=>{
            handleClose()
            option?.onClickCb()
          }}>
            {option?.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuDropdown