import {
  RadioProps as ChakraRadioProps,
  Box,
  useRadio,
  HStack,
  useRadioGroup,
} from "@chakra-ui/react";

interface IOptionsRadio {
  options: string[];
}

function RadioCard(props: ChakraRadioProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        // _focus={{
        //   boxShadow: "outline",
        // }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function Example({ options }: IOptionsRadio) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
