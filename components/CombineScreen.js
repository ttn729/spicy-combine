import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function CombineScreen() {
  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState("");
  const [combination, setCombination] = React.useState([]);

  // https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays
  let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const onClickCombine = () => {
    let combined = [];

    let firstSplit = first.split("\n");
    let secondSplit = second.split("\n");

    if (firstSplit.length == secondSplit.length) {
      combined = zip(firstSplit, secondSplit);
    }
    setCombination(combined);
  };

  const onClickHidden = () => {
    let combined = [];

    let firstSplit = first.split("\n");
    let secondSplit = second.split("\n");

    if (firstSplit.length == secondSplit.length && first != "") {
      for (var i = 0; i < secondSplit.length; i++) {
        let words = secondSplit[i].split(" ");
        words[getRandomInt(words.length)] = "_".repeat(16);
        secondSplit[i] = words.join(" ");
      }
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
      <Box sx={{ width: 1 }}>
        <Typography color="green" variant="h2" align="center" margin={2}>
          Spicy Combine
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              multiline
              label="First Text"
              minRows={20}
              value={first}
              onChange={onChangeFirst}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              multiline
              label="Second Text"
              minRows={20}
              value={second}
              onChange={onChangeSecond}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      <Box flexDirection="row" margin={1}>
        <Button variant="outlined" onClick={onClickCombine}>
          Combine Text
        </Button>
        <Button variant="outlined" onClick={onClickHidden}>
          Hide Random Word
        </Button>
      </Box>

      <Box sx={{ justifyContent: "right" }}>
        {combination.map((line, index) => {
          return (
            <Box key={index}>
              <Typography align="left">{line[0]}</Typography>
              <Typography align="left">{line[1]}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
