import React from  'react'
import { Code, Web } from '@material-ui/icons';
import {CardContent, LinearProgress, CardHeader, Card, Typography, Container, Grid, Box, List, ListItem, ListItemText, Divider} from '@material-ui/core';

export default function Skill(){
	return(
		<Card style={{width: "80%", marginTop: 40, marginBottom: 40,marginLeft: 'auto', marginRight: 'auto'}}>
			<Container style={{textAlign: 'center', marginBottom: 20}}>
		      <CardHeader title="Skills"/>
		      <List>
		      	<ListItem>
		      		<ListItemText><Box display="flex"><Typography  color="textSecondary">Languages</Typography><Box style={{marginLeft: 8}}><Code/></Box></Box></ListItemText>
		      	</ListItem><br/>
			      <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">Python
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={85} color="primary"/>
		            </Box>   
				  </Box>
				  <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">Java
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={90} />
		            </Box>   
				  </Box>
				  <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">C++
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={75} />
		            </Box>   
				  </Box>
				  <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">JavaScript
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={90} />
		            </Box>   
				  </Box><br/>	
				<Divider/>
			  </List>
			  <List>
		      	<ListItem>
		      		<ListItemText><Box display="flex"><Typography  color="textSecondary">Web Dev</Typography><Box style={{marginLeft: 8}}><Web/></Box></Box></ListItemText>
		      	</ListItem><br/>
		      	<Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">HTML
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={95} />
		            </Box>   
			    </Box>
			    <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">CSS
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={90} />
		            </Box>   
			    </Box>
		      	<Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">Django
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={85} />
		            </Box>   
			    </Box>
			    <Box display="flex" alignItems="center">
			      	<Box width={75}>
		              <Typography variant="body2" color="textSecondary">React JS
		              </Typography>
		            </Box>
			        <Box width="90%" mr={1} style={{marginLeft: 20}}>
		              <LinearProgress variant="determinate" value={90} />
		            </Box>   
			    </Box><br/>
			    <Divider/>	
	      	  </List>  
			  
			  
			  <Box display="flex" alignItems="center">
		      	<Box width={70}>
	              <Typography variant="body2" color="textSecondary">Artificial<br/> Neural Network
	              </Typography>
	            </Box>
		        <Box width="90%" mr={1} style={{marginLeft: 20}}>
	              <LinearProgress variant="determinate" value={90} />
	            </Box>   
			  </Box>
			  
		    </Container>
		</Card>      
	)
}