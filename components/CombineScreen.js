import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function CombineScreen() {
  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState("");
  const [combination, setCombination] = React.useState([]);

  // https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
  let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

  const onClickCombine = () => {
    let combined = [];

    let firstSplit = first.split("\n");
    let secondSplit = second.split("\n");

    if (firstSplit.length == secondSplit.length) {
      combined = zip(firstSplit, secondSplit);
    }

    setCombination(combined);
  };

  const onChangeFirst = (e) => {
    setFirst(e.target.value);
  };
  const onChangeSecond = (e) => {
    setSecond(e.target.value);
  };

  return (
    <>
      <Box>
        <Typography variant="h2">Spicy Combine</Typography>

        <TextField
          multiline
          label="First Text"
          minRows={20}
          value={first}
          onChange={onChangeFirst}
        />
        <TextField
          multiline
          label="Second Text"
          minRows={20}
          value={second}
          onChange={onChangeSecond}
        />
      </Box>

      <Button variant="outlined" onClick={onClickCombine}>
        Combine
      </Button>
      <Button variant="outlined">Hide Random</Button>

      <Box sx={{justifyContent: "right"}}>
        {combination.map((line, index) => {
          return (
            <Box>
              <Typography key={index} align="left">
                {line[0]}
              </Typography>
              <Typography key={index} align="left">
                {line[1]}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
