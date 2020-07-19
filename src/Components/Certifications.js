import React from 'react'
import { List, ListItem, ListItemText, Divider, CardContent, CardHeader, Card, Typography, Container, Grid, Box, Link } from '@material-ui/core'
import jssl from '../jssl.pdf'
export default function Certifications(){
	return(
		<React.Fragment>
			<Card style={{width: "80%", marginTop: 40, marginBottom: 40, marginLeft: 'auto', marginRight: 'auto'}}>
				<Container style={{textAlign: 'center', marginBottom: 40 }}>
			      <CardHeader title="Certifications"/>
		        
					<List>
						<ListItem button>
							<ListItemText><Link target="_blank" color="inherit" style={{textDecoration: "none"}} href="https://coursera.org/share/a16dae459510ad6144e575bdedc2a901">Neural Networks and Deep Learning</Link></ListItemText>
						</ListItem>
						<Divider/>
						<ListItem button>
							<ListItemText><Link target="_blank" color="inherit" style={{textDecoration: "none"}} href="https://coursera.org/share/c890ca73d3af2a3833492d55f2a0ba5b">How Google does Machine Learning</Link></ListItemText>
						</ListItem>
						<Divider/>
						<ListItem button>
							<ListItemText><Link target="_blank" color="inherit" style={{textDecoration: "none"}} href={jssl}>JavaScript course</Link></ListItemText>
						</ListItem>
						<Divider/>
					</List>
				</Container>
			</Card>
		</React.Fragment>
	)
}