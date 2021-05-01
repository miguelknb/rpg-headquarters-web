import React from 'react'
import {Formik, Form} from 'formik'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import Container from '../components/container';
import InputField from '../components/inputField';

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
		return (
			<Container>
				<Formik 
						initialValues={{username: "", password: ""}}
						onSubmit={(values) => {
								console.log(values)
						}}
				>
						{ ({values, handleChange, isSubmitting}) => (
								<Form>
									<Box>
										<InputField name='username' placeholder='username' label='Username'/>
									</Box>
									<Box mt={5}>
										<InputField type ='password' name='password' placeholder='password' label='Password'/>
									</Box>
									<Button mt={5} type='submit' colorScheme="blue" isLoading={isSubmitting}>Register</Button>
								</Form>
						)}
				</Formik>
			</Container>
		);
}

export default Register