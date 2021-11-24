import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ListRows } from '../../interfaces/appInterfaces';
import {PersonInfo} from '../';

const ExpansionPanelComponent: FC<ListRows> = ({data,
                                                panelId,
                                                panelExpanded,
                                                handleChange}) => {
  const classes = styles();
  const [panelNumber, setPanelNumber] = useState('')

  useEffect(() => {
    setPanelNumber(`panel${panelId}`);
  },[panelId]);

  const onChange = (panelId: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    handleChange(data.id, newExpanded ? panelId : false)
  };

  return (
  <Accordion expanded={panelExpanded === panelNumber} onChange={onChange(`panel${panelId}`)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${panelId}bh-content`}
      id={`panel${panelId}bh-header`}
    >
      <div className={classes.summary}>
        {panelExpanded !== panelNumber && <Avatar alt={`panel-${data.name}-avatar`} src={data.thumbnail} />}
        <Typography className={classes.heading}>{data?.name}</Typography>
      </div>
    </AccordionSummary>
    <AccordionDetails className={classes.detailsRoot}>
      {panelExpanded === panelNumber && <PersonInfo panelId={data.id} />}
    </AccordionDetails>
  </Accordion>
);
}

export default ExpansionPanelComponent;