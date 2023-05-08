import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { TransactionType } from '../../types/transaction/transactionTypes';
import { useAppDispatch } from '../../features/redux/hooks';
import { changeModal, setCurrentId } from '../../features/redux/slices/transaction/transactionSlice';

type TransactionItemProps = {
  transaction: TransactionType;
  uselessCallback: () => void;
};

function TransactionItem({ transaction, uselessCallback }: TransactionItemProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {transaction.Sender.username.slice(0, 1)}
          </Avatar>
        }
        action={
          <>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch(changeModal());
                  dispatch(setCurrentId(transaction.id))
                  // dispatch(deletePostThunk(post.id));
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </>
        }
        title={transaction.Sender.username}
        subheader={transaction.createdAt.toLocaleString()}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {transaction.value}
        </Typography>
        <Typography variant="h5" component="div">
          {transaction.Receiver.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {transaction.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default React.memo(TransactionItem);
