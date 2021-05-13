import React from 'react'
import {Formik, Form} from 'formik'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import Container from '../components/container';
import {InputField} from '../components/inputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import {useRouter} from 'next/router'


interface registerProps {}


const Register: React.FC<registerProps> = ({}) => {
		const [, register] = useRegisterMutation()
		const router = useRouter()
		return (
			<Container>
				<Text mb={20}color="white" fontSize={"5xl"}>Register</Text>
				<Formik 
						initialValues={{username: "", password: ""}}
						onSubmit={async (values, {setErrors}) => {
							const response = await register({username: values.username, password: values.password})

							if (response.data?.register.errors) {
								setErrors(toErrorMap(response.data.register.errors));
							}
							else if (response.data.register.user) {
								router.push("/update");
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
									<Button mt={5} type='submit' colorScheme="blue" isLoading={isSubmitting}>Register</Button>
								</Form>
						)}
				</Formik>
			</Container>
		);
}

export default Register