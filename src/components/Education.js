import { Card, Container, Typography, CardHeader } from '@material-ui/core'
import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab'
import eduIllu from '../images/eduIllu.svg';

function Education() {
  return (
    <div>
      <Card style={{ width: "100%", padding: "40px 20px" }}>
        <Container style={{ textAlign: 'center', marginBottom: 40 }}>
          {/* <img className="edu__illu" src={eduIllu} width="200px" /> */}
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography style={{ fontSize: "18px" }} color="textSecondary">March 2012 - May 2016</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{ fontSize: "18px" }} align="left">Saint Paul's School, Maynaguri</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography style={{ fontSize: "18px" }} color="textSecondary">March 2012 - May 2018</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{ fontSize: "18px" }}>Saint Anthony's Day School, Jalpaiguri (ICSE)</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography style={{ fontSize: "18px" }} color="textSecondary">April 2018 - July 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{ fontSize: "18px" }} align="left">Saint Paul's School, Jalpaiguri (ISC Science)</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography style={{ fontSize: "18px" }} color="textSecondary">2020 - 2024</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{ fontSize: "18px" }}>Jalpaiguri Government Engineering College (B.Tech. in CSE)</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </Card>
    </div>
  )
}

export default Education
