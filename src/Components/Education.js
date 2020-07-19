import React from 'react'
import {CardContent, CardHeader, Card, Typography, Container, Grid, Box} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@material-ui/lab'
export default function Education(){
	return (
		<React.Fragment>
		<Card style={{width: "80%", marginTop: 40, marginBottom: 40, marginLeft: 'auto', marginRight: 'auto'}}>
			<Container style={{textAlign: 'center', marginBottom: 40 }}>
		      <CardHeader title="Education"/>
	        
		      	<Timeline align="alternate">
		      	        <TimelineItem>
		      	          <TimelineOppositeContent>
		      	            <Typography color="textSecondary">March 2012 - May 2016</Typography>
		      	          </TimelineOppositeContent>
		      	          <TimelineSeparator>
		      	            <TimelineDot />
		      	            <TimelineConnector />
		      	          </TimelineSeparator>
		      	          <TimelineContent>
		      	            <Typography>Saint Paul's School, Maynaguri</Typography>
		      	          </TimelineContent>
		      	        </TimelineItem>
		      	        <TimelineItem>
		      	          <TimelineOppositeContent>
		      	            <Typography color="textSecondary">March 2012 - May 2018</Typography>
		      	          </TimelineOppositeContent>
		      	          <TimelineSeparator>
		      	            <TimelineDot />
		      	            <TimelineConnector />
		      	          </TimelineSeparator>
		      	          <TimelineContent>
		      	            <Typography>Saint Anthony's Day School, Jalpaiguri (ICSE)</Typography>
		      	          </TimelineContent>
		      	        </TimelineItem>
		      	        <TimelineItem>
		      	          <TimelineOppositeContent>
		      	            <Typography color="textSecondary">April 2018 - July 2020</Typography>
		      	          </TimelineOppositeContent>
		      	          <TimelineSeparator>
		      	            <TimelineDot />
		      	            <TimelineConnector />
		      	          </TimelineSeparator>
		      	          <TimelineContent>
		      	            <Typography>Saint Paul's School, Jalpaiguri (ISC Science)</Typography>
		      	          </TimelineContent>
		      	        </TimelineItem>
		      	      </Timeline>
		      	      </Container>
	    </Card>
	    </React.Fragment>
    )
}