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

const Home: React.FC = () => {
  const [kwh, setKwh] = React.useState(0);
  const [aliquota, setAliquota] = React.useState(0);
  const [propertyType, setPropertyType] = React.useState("");
  const b4a = 0.41277;

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
            id="demo-simple-select"
            value={propertyType}
            onChange={handleChange}
          >
            <MenuItem value="residencial">Residencial</MenuItem>
            <MenuItem value="comercial">Comercial</MenuItem>
          </Select>
        </FormControl>
      </S.WrapperDropDown>
      <S.Subtitle>Equatorial</S.Subtitle>
      <S.Description>
        Iluminação Pública – B4a: {b4a} <br></br> Inicio de Vigência: 03/05/2022
        a 02/05/2023
      </S.Description>
      <S.Subtitle>Calculo</S.Subtitle>
      <S.Description>
        A aliquota para a classe {propertyType} é de <b>{aliquota}</b>,<br></br>{" "}
        para ver o documento que mostra a relação, click{" "}
        <a href="https://www.limoeirodeanadia.al.gov.br/public/admin/globalarq/legislacao/arquivo/ad5cd885a19d9c4939db70882d85f0236dd651f7.pdf">
          aqui
        </a>
        <br></br>
        <br></br>
        Aliquota * b4a = {(aliquota * b4a).toFixed(2)}
      </S.Description>
      <S.Subtitle>
        Valor da iluminação pública: R$ {(aliquota * b4a).toFixed(2)}
      </S.Subtitle>
    </S.Content>
  );
};

export default Home;
