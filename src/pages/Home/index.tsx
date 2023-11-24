import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { b4aCurrent } from "@assets/b4a";

import { getPropertyData } from "./utils";

import { LocationType } from "./types";

import * as S from "./styles";

const Home: React.FC = () => {
  const [kwh, setKwh] = useState(0);
  const [aliquota, setAliquota] = useState(0);
  const [propertyType, setPropertyType] = useState<LocationType>();

  const calculateAliquota = (value: number, property?: LocationType) => {
    if (!property && !propertyType) return;

    getPropertyData(property ?? propertyType!).forEach((item) => {
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

  const handleChange = async (event: SelectChangeEvent<string>) => {
    setPropertyType(event.target.value as LocationType);
    calculateAliquota(kwh, event.target.value as LocationType);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Image
          src="https://gabrielsv01.github.io/lemon-tree-lighting.github.io/brasao.png"
          alt=""
        />
        <S.Title>Limoeiro de Anadia</S.Title>
        <S.Subtitle>Cálculo de iluminação pública</S.Subtitle>

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
        <S.Subtitle>Tarifa da equatorial</S.Subtitle>
        <S.Description>
          Iluminação Pública – B4a: <b>{b4aCurrent.value}</b> <br></br> Inicio
          de Vigência: <b>{b4aCurrent.start}</b> a <b>{b4aCurrent.end}</b>
          <br></br>
          Acesse o{" "}
          <b>
            <a
              target="_blank"
              href="https://al.equatorialenergia.com.br/informacoes-gerais/valor-de-tarifas-e-servicos/"
            >
              site da equatorial
            </a>
          </b>{" "}
          para mais informações
        </S.Description>
        {propertyType && !!kwh && (
          <>
            <S.Subtitle>Cálculo</S.Subtitle>
            <S.Description>
              A aliquota para a classe {propertyType} é de <b>{aliquota}</b>,
              <br></br> para ver o documento que mostra a relação, click{" "}
              <b>
                <a
                  target="_blank"
                  href="https://www.limoeirodeanadia.al.gov.br/public/admin/globalarq/legislacao/arquivo/ad5cd885a19d9c4939db70882d85f0236dd651f7.pdf"
                >
                  aqui
                </a>
              </b>
              <br></br>
              <br></br>
              Aliquota * b4a = Valor da iluminação pública
              <br></br>
              <b>
                {" "}
                {aliquota} * {b4aCurrent.value} ={" "}
                {(aliquota * b4aCurrent.value).toFixed(2)}
              </b>
            </S.Description>
            <S.Subtitle>
              Valor da iluminação pública: <br></br> R${" "}
              {(aliquota * b4aCurrent.value).toFixed(2)}
            </S.Subtitle>
          </>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Home;
