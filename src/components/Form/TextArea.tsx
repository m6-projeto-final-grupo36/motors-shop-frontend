import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextAreaProps,
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

interface ITextAreaProps extends ChakraTextAreaProps {
  name: string;
  label?: string;
  error?:
    | FieldError
    | Partial<{
        type: string | number;
        message: string;
      }>
    | undefined;
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

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  ITextAreaProps
> = ({ name, label, error = undefined, ...rest }, ref) => {
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
        <ChakraTextArea
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

export const TextArea = forwardRef(TextAreaBase);
