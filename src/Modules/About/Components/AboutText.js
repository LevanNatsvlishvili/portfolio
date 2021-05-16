import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const AboutText = (props) => {
  const classes = useStyles({
    lineHeight: props.lineHeight
  });
  const { heading, desc, link } = props;

  return (
    <Typography className={classes.heading}  >
      {heading}
      <Typography component='span' className={classes.desc}>
        {link ? <a target="_blank" rel="noopener noreferrer" href={link}>
          {desc}
        </a> : desc}
      </Typography>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 18,
    color: theme.colors.grey,
    lineHeight: props => props.lineHeight || '18px',
    fontWeight: 800,
    '& ul': {
      margin: 0,
      paddingLeft: 15,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      position: 'unset',
    },
  },
  desc: {
    fontSize: 18,
    marginLeft: theme.spacing(.5),
    color: theme.colors.grey,
    '& a': {
      color: '#007bff'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      position: 'unset',
    },
  },
}));

export default AboutText;