import React from 'react'
import { List, ListItem, ListItemText, Divider, CardContent, CardHeader, Card, Typography, Container, Grid, Box, Link } from '@material-ui/core'
import gci from '../GCI 2018 Certificate for Sahil Saha.pdf'
export default function Awards(){
	return(
		<React.Fragment>
			<Card style={{width: "80%", marginTop: 40, marginBottom: 40, marginLeft: 'auto', marginRight: 'auto'}}>
				<Container style={{textAlign: 'center', marginBottom: 40 }}>
			      <CardHeader title="Awards"/>
		        
					<List>
						<ListItem button>
							<ListItemText><Link target="_blank" color="inherit" style={{textDecoration: "none"}} href={gci}>Google Code-in 2018 Grand Prize Winner</Link></ListItemText>
						</ListItem>
						<Divider/>
						<ListItem button>
							<ListItemText>Code Gladiators 2019 Semi-finalist</ListItemText>
						</ListItem>
						<Divider/>
					</List>
				</Container>
			</Card>

		</React.Fragment>
	)
}