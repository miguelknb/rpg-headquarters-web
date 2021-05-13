import { Box, Button, Container, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/inputField";
import Layout from "../components/layoyut";
import { useMeQuery, useRegisterMutation, useUpdateUserMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

const UpdatePage = ({}) => {

  const [{ data, fetching, error }] = useMeQuery();

	const router = useRouter();

  const [, update] = useUpdateUserMutation();

	if (fetching) return <Box p={25} m={"auto"}><Text fontSize="5x1">Loading</Text></Box>

  if (data && data.me === null) {
    router.push('/login');
  }

  console.log(data.me)

	const player = data?.me

  return (
		<Layout>
		<Box p={10}>
			<Container>
      <Formik
        initialValues={{ 
					maxHealth: player.maxHealth,
					maxSanity: player.maxSanity,
					imgUrl_sane_normal: player.imgUrl_sane_normal,
					imgUrl_sane_hurt: player.imgUrl_sane_hurt,
					imgUrl_sane_dying: player.imgUrl_sane_dying,
					imgUrl_insane_normal: player.imgUrl_insane_normal,
					imgUrl_insane_hurt: player.imgUrl_insane_hurt,
					imgUrl_insane_dying: player.imgUrl_insane_dying,
					imgUrl_dead: player.imgUrl_dead
				}}
        onSubmit={async (values, { setErrors }) => {
          const response = await update({
            id: player.id,
            maxHealth: Number(values.maxHealth),
            maxSanity: Number(values.maxSanity),
            imgUrl_sane_normal: values.imgUrl_sane_normal,
            imgUrl_sane_hurt: values.imgUrl_sane_hurt,
            imgUrl_sane_dying: values.imgUrl_sane_dying,
            imgUrl_insane_normal: values.imgUrl_insane_normal,
            imgUrl_insane_hurt: values.imgUrl_insane_hurt,
            imgUrl_insane_dying: values.imgUrl_insane_dying,
            imgUrl_dead: values.imgUrl_dead
          });

          if (!response.data) {
            // setErrors(toErrorMap(response.errors));
            console.log(response)
          } else if (response.data) {
            router.push("/player");
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <Text mb={10} color="white" fontSize="2xl">Status</Text>
            <Box>
              <InputField
                color="white"
                name="maxHealth"
                placeholder="max health"
                label="MaxHealth"
              />
            </Box>
            <Box mt={5}>
              <InputField
                color="white"
                type="maxSanity"
                name="maxSanity"
                placeholder="max sanity"
                label="MaxSanity"
              />
            </Box>
						  <Text mt={10} color="white" fontSize="2xl">Images Url</Text>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_sane_normal"
                placeholder="image url"
                label="Sane Normal Image"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_sane_hurt"
                placeholder="image url"
                label="Sane Normal Hurt"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_sane_dying"
                placeholder="image url"
                label="Sane Normal Dying"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_insane_normal"
                placeholder="image url"
                label="Insane Normal Image"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_insane_hurt"
                placeholder="image url"
                label="Insane Normal Hurt"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_insane_dying"
                placeholder="image url"
                label="Insane Normal Dying"
              />
            </Box>
						<Box mt={5}>
              <InputField
                color="white"
                name="imgUrl_dead"
                placeholder="image url"
                label="Dead"
              />
            </Box>
            <Button
              color="white"
              mt={5}
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
            >
              Update
            </Button>
          </Form>
        )}
      </Formik>
			</Container>
		</Box>
		</Layout>
  );
};

export default UpdatePage;
