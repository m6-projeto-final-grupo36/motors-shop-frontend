import {
  FormControl, //Vê se deu erro ou não, faz efeitos visuais
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { IconType } from "react-icons/lib";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?:
    | FieldError
    | Partial<{
        type: string | number;
        message: string;
      }>
    | undefined;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "var(--color-feedback-alert-1)",
  default: "var(--color-grey-3)",
  focus: "var(--color-brand-2)",
  filled: "var(--color-feedback-success-1)",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, icon: Icon, label, error = undefined, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");

  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="var(--color-grey-1)">{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement
            color={inputVariation[variation]}
            mt="2.5"
            children={<Icon />}
          />
        )}

        <ChakraInput
          name={name}
          bg="var(--color-white-fixed)"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          variant="outline"
          _hover={{ bgColor: "var(--color-grey-7)" }}
          _placeholder={{ color: "var(--color-grey-3)" }}
          ref={ref}
          size="lg"
          h="60px"
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
