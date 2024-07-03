import { FlexBox, Typography } from "@phantomthief-react/components";
import { CustomButton } from "../../../components/custom-button";
import { Controller, useForm } from "react-hook-form";
import { IContactFormData } from "./types";
import { Styled } from "./style";
import { useState } from "react";

export const ContactForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { handleSubmit, control } = useForm<IContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: IContactFormData) => {
    console.log("Submit message: ", data);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Styled.Container>
      {!showAlert ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography color="#607b96" size={16}>
            _name:
          </Typography>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Styled.TextField {...field} variant="outlined" fullWidth />
            )}
          />
          <Typography color="#607b96" size={16}>
            _email:
          </Typography>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Styled.TextField {...field} variant="outlined" fullWidth />
            )}
          />
          <Typography color="#607b96" size={16}>
            _message:
          </Typography>
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <Styled.TextField {...field} variant="outlined" fullWidth />
            )}
          />
          <CustomButton variant="outlined">submit-message</CustomButton>
        </form>
      ) : (
        <FlexBox flexDirection="column" gap="13px">
          <Typography size={24} color="#ffffff">
            Thank you! 🤘
          </Typography>
          <Typography size={18} color="#607b96" align="center">
            Your message has been accepted. You will recieve answer really soon!
          </Typography>
        </FlexBox>
      )}
    </Styled.Container>
  );
};
