import {
  RadioProps as ChakraRadioProps,
  Box,
  useRadio,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";

const RadioCard = (props: ChakraRadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w="100%" textAlign="center">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "var(--color-brand-1)",
          color: "white",
          borderColor: "var(--color-brand-1)",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

interface IOptions {
  value: string;
  text: string;
}

interface IInputRadio {
  name: string;
  defaultValue: string;
  handleChange: (str: string) => void;
  options: IOptions[];
}

export const InputRadio = ({
  name,
  defaultValue,
  handleChange,
  options,
}: IInputRadio) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <HStack w="100%" {...group}>
      {options.map(({ text, value }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {text}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
