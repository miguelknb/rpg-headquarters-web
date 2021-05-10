import { FormControl, FormLabel, Input, FormErrorMessage, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, NumberInputField } from '@chakra-ui/react'
import { useField } from 'formik';
import React, {InputHTMLAttributes} from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
}

export const InputField : React.FC<InputFieldProps> = ({label, size:_, ...props}) => {
    const [field, {error}] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input {...field} {...props} id={field.name}/>
        { error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    )
}

export const InputNumberField : React.FC<InputFieldProps> = ({label, size:_, ...props}) => {
    const [field, {error}] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        {/* <Input {...field} {...props} id={field.name}/> */}
        <NumberInput width={'100px'}>
            <NumberInputField {...field} {...props} id={field.name}/>
        </NumberInput>
        { error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    )
}