import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../../components/Form/Input";

interface IImagesCreateProps {
  request_type: "create" | "update";
}

export const InputsImages = ({ request_type }: IImagesCreateProps) => {
  const [inputsCountCreate, setInputsCountCreate] = useState([] as string[]);

  return (
    <>
      {request_type === "create" ? (
        <VStack gap="20px" w="100%">
          {inputsCountCreate.length > 0 &&
            inputsCountCreate.map((_, i) => {
              return (
                <Input
                  placeholder="https://image.com"
                  key={i}
                  label={`${i + 1}° imagem da galeria`}
                  color="var(--color-brand-2)"
                  name="images"
                  new_class="new_image_links"
                />
              );
            })}
          {inputsCountCreate.length < 6 && (
            <Button
              mt="20px"
              w="100%"
              h="max-content"
              p="10px 5px"
              whiteSpace="normal"
              bgColor="var(--color-brand-4)"
              color="var(--color-brand-1)"
              type="button"
              onClick={() => setInputsCountCreate([...inputsCountCreate, ""])}
            >
              Adicionar campo para imagem da galeria
            </Button>
          )}
        </VStack>
      ) : (
        <>
          <p>é update</p>
        </>
      )}
    </>
  );
};
