import React from  'react'
import { Code, Web } from '@material-ui/icons';
import {CardContent, LinearProgress, CardHeader, Card, Typography, Container, Grid, Box, List, ListItem, ListItemText, Divider, Tooltip} from '@material-ui/core';
import python from '../python.svg'
import java from '../java.svg'
import cpp  from '../C++.svg';
import skillsIllu from '../skillsIllu.svg'
import js from '../javascript.svg'
import html from '../HTML.svg'
import css from '../CSS.svg'
import react from '../React.svg'
import node from '../Node2.svg'
import git from '../git.png'
import django from '../django.svg'
import firebase from '../firebase.svg'
import mongo from '../mongo.svg'
import './Skills.css'

export default function Skill(){
	return(
		<Card style={{width: "80%", marginTop: 40, marginBottom: 40,marginLeft: 'auto', marginRight: 'auto'}}>
			<Container style={{textAlign: 'center', marginBottom: 20}}>
			  <div style={{padding: "20px"}}>
			  	<img src={skillsIllu} className="skills__illu"/>
				  <Typography color="inherit" variant="h5" style={{marginTop: "20px"}}>
					  Skills
				  </Typography>
				  {/* <Box display="flex"><Typography  color="textSecondary">Languages</Typography><Box style={{marginLeft: 8}}><Code/></Box></Box> */}
				<div style={{marginTop: '0px'}}>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Python</Typography>}>
						<img className="skills__logo" src={python}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Java</Typography>}>
						<img className="skills__logo" src={java}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">C++</Typography>}>
						<img className="skills__logo" src={cpp}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">JavaScript</Typography>}>
						<img className="skills__logo" src={js}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">HTML</Typography>}>
						<img className="skills__logo" src={html}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">CSS</Typography>}>
						<img className="skills__logo" src={css}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">React</Typography>}>
						<img className="skills__logo" src={react}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Node JS</Typography>}>
						<img className="skills__logo" src={node}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Django</Typography>}>
						<img className="skills__logo" src={django}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Firebase</Typography>}>
						<img className="skills__logo" src={firebase}/>
					</Tooltip>
					<Tooltip placement="top" title={<Typography color="inherit" variant="body1">Mongo DB</Typography>}>
						<img className="skills__logo" src={mongo}/>
					</Tooltip>
				</div>
			  </div>
			  
		      {/* <List>
		      	
			 		
			      {/* <Box display="flex" alignItems="center">
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
			  </Box> */}
			  
		    </Container>
		</Card>      
	)
}