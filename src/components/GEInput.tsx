import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import styles from "./GenEdInput.module.css";
import type { Submit } from "../types";

export default function GenEdInput({ setSelectedGE }: Submit) {
  const [ge, setGE] = useState("");

  const handleSubmit = () => {
    if (!ge) return;
    setSelectedGE(ge);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setGE(event.target.value as string);
  };

  return (
    <div className={styles.page}>
      <Box className={styles.container}>
        <FormControl fullWidth>
          <InputLabel id="gen-ed-label">Select a Gen Ed Category:</InputLabel>
          <Select
            labelId="gen-ed-label"
            value={ge}
            label="Select a Gen Ed Category:"
            onChange={handleChange}
            MenuProps={{ disableAutoFocusItem: true }}
          >
            <MenuItem value={"GE-1A"}>Ia. Writing 1A</MenuItem>
            <MenuItem value={"GE-1B"}>Ib. Writing 1B</MenuItem>
            <MenuItem value={"GE-2"}>II. Science and Technology</MenuItem>
            <MenuItem value={"GE-3"}>
              III. Social and Behavioral Sciences
            </MenuItem>
            <MenuItem value={"GE-4"}>IV. Arts and Humanities</MenuItem>
            <MenuItem value={"GE-5A"}>
              Va. Quantitative, Symbolic, and Computational Reasoning
            </MenuItem>
            <MenuItem value={"GE-5B"}>
              Vb. Quantitative, Symbolic, and Computational Reasoning
            </MenuItem>
            <MenuItem value={"GE-6"}>VI. Language Other Than English</MenuItem>
            <MenuItem value={"GE-7"}>VII. Multicultural Studies</MenuItem>
            <MenuItem value={"GE-8"}>
              VIII. International/Global Issues
            </MenuItem>
          </Select>
        </FormControl>

        <button className={styles.btn} onClick={handleSubmit}>
          Submit
        </button>
      </Box>
    </div>
  );
}
