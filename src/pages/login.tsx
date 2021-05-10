import React from 'react'
import {Formik, Form} from 'formik'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import Container from '../components/container';
import {InputField} from '../components/inputField';
import { useMutation } from 'urql';
import { useLoginMutation} from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import {useRouter} from 'next/router'


interface registerProps {}


const Login: React.FC<{}> = ({}) => {
		const [, login] = useLoginMutation()
		const router = useRouter()
		return (
			<Container>
				<Formik 
						initialValues={{username: "", password: ""}}
						onSubmit={async (values, {setErrors}) => {
							const response = await login({username: values.username, password: values.password})

							if (response.data?.login.errors) {
								setErrors(toErrorMap(response.data.login.errors));
							}
							else if (response.data.login.user) {
								router.push("/player");
							}
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
									<Button mt={5} type='submit' colorScheme="blue" isLoading={isSubmitting}>Login</Button>
								</Form>
						)}
				</Formik>
			</Container>
		);
}

export default Login