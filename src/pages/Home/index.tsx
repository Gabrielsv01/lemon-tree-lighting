import React from "react";
import * as S from "./styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { residencial } from "assets/2023/residencial";

import { b4aCurrent } from "assets/b4a";

const Home: React.FC = () => {
  const [kwh, setKwh] = React.useState(0);
  const [aliquota, setAliquota] = React.useState(0);
  const [propertyType, setPropertyType] = React.useState("");

  const calculateAliquota = (value: number) => {
    residencial.forEach((item) => {
      if (value >= item.start && value <= item.end) {
        console.log(item.aliquota, value);
        setAliquota(item.aliquota);
      }
    });
  };
  const handleChangekWh = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKwh(Number(event.target.value));
    calculateAliquota(Number(event.target.value));
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setPropertyType(event.target.value);
    calculateAliquota(kwh);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Lemon tree light</S.Title>
        <S.InputWrapper>
          <TextField
            fullWidth
            onChange={handleChangekWh}
            type="number"
            id="outlined-basic"
            label="Digite quantos kWhts você consumiu"
            variant="outlined"
          />
        </S.InputWrapper>
        <S.WrapperDropDown>
          <FormControl fullWidth required>
            <InputLabel id="input-label">Selecione o tipo de imóvel</InputLabel>
            <Select
              labelId="input-label"
              id="simple-select"
              value={propertyType}
              onChange={handleChange}
            >
              <MenuItem value="residencial">Residencial</MenuItem>
            </Select>
          </FormControl>
        </S.WrapperDropDown>
        <S.Subtitle>Equatorial</S.Subtitle>
        <S.Description>
          Iluminação Pública – B4a: <b>{b4aCurrent.value}</b> <br></br> Inicio
          de Vigência: <b>{b4aCurrent.start}</b> a <b>{b4aCurrent.end}</b>
        </S.Description>
        {propertyType && !!kwh && (
          <>
            <S.Subtitle>Calculo</S.Subtitle>
            <S.Description>
              A aliquota para a classe {propertyType} é de <b>{aliquota}</b>,
              <br></br> para ver o documento que mostra a relação, click{" "}
              <a
                target="_blank"
                href="https://www.limoeirodeanadia.al.gov.br/public/admin/globalarq/legislacao/arquivo/ad5cd885a19d9c4939db70882d85f0236dd651f7.pdf"
              >
                aqui
              </a>
              <br></br>
              <br></br>
              Aliquota * b4a = {(aliquota * b4aCurrent.value).toFixed(2)}
            </S.Description>
            <S.Subtitle>
              Valor da iluminação pública: R${" "}
              {(aliquota * b4aCurrent.value).toFixed(2)}
            </S.Subtitle>
          </>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Home;
