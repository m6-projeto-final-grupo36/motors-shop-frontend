import { Button, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Input } from "../../components/Form/Input";

interface IImagesCreateProps {
  imgs: string[];
  setImgs: Dispatch<SetStateAction<string[]>>;
}

export const InputsImages = ({ imgs, setImgs }: IImagesCreateProps) => {
  return (
    <>
      <VStack gap="20px" w="100%">
        {imgs.length > 0 &&
          imgs.map((img, i) => {
            return (
              <Input
                placeholder="https://image.com"
                key={i}
                label={`${i + 1}° imagem da galeria`}
                color="var(--color-brand-2)"
                name="images"
                onChange={(e) => {
                  setImgs(() => {
                    imgs[i] = e.target.value;
                    return imgs;
                  });
                }}
                defaultValue={img}
              />
            );
          })}
        {imgs.length < 6 && (
          <Button
            mt="20px"
            w="100%"
            h="max-content"
            p="10px 5px"
            whiteSpace="normal"
            bgColor="var(--color-brand-4)"
            color="var(--color-brand-1)"
            type="button"
            onClick={() => setImgs([...imgs, ""])}
          >
            Adicionar campo para imagem da galeria
          </Button>
        )}
      </VStack>
    </>
  );
};
