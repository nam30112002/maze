import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import BangHanhDong from './BangHanhDong';
import "./GameArea.css";
import { Menu } from '@mui/material';



class InputChoice extends React.Component {
    constructor(props){
        super(props);
    }

    

  render(){
    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel>Huong di chuyen</InputLabel>
            <p></p>
            <p></p>
            <select size="medium" onChange={this.props.handleChange} >
            <option value={""}>None</option>
            <option value={"Len"}>Len</option>
            <option value={"Phai"}>Phai</option>
            <option value={"Trai"}>Trai</option>
            <option value={"Xuong"}>Xuong</option>
            </select>
            <p></p>
            <Button variant="contained" size="medium" onClick={this.props.handleThem}>Them</Button>
        </FormControl>
        </Box>
    );
  }
}
export default InputChoice;