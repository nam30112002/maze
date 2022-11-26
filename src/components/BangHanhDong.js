import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { Rowing } from '@mui/icons-material';
import Button from '@mui/material/Button';
import InputChoice from './InputChoice';
import GameArea from './GameArea';
import { wait } from '@testing-library/user-event/dist/utils';


class BangHanhDong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listHanhDong : ["Len"],
            hanhDongThem : "",
        }
    }
    inra(){
        console.log("nam");
        return (
        this.state.listHanhDong.map((value,index) =>
        <div>    
            <block>{value}</block>
            <Button variant="contained" tabIndex={index} onClick={(e)=>this.handleXoa(e,this)}>Xoa</Button>
            <p></p>
        </div>    
        )
    );
    }

    handleXoa(e){
        e.preventDefault();
        let stt = e.target.tabIndex;
        console.log(e.target.tabIndex);
        //e.target.parentNode.parentNode
        this.setState({
            listHanhDong: this.state.listHanhDong.filter((_, i) => i !== stt),
        });
        
    }
    handleChange(e){
        e.preventDefault();
        
        this.setState({
            hanhDongThem: e.target.value,
        });
        
        console.log(this.state.hanhDongThem);
    }
    handleThem(e){
        e.preventDefault();
        
        let x=this.state.hanhDongThem;
        if (x=="") return;
        this.setState({
            listHanhDong: [...this.state.listHanhDong, x],
        });
    }

    async handleChay(e){
        e.preventDefault();
        console.log("chay");
        let soLuong=this.state.listHanhDong.length;
        console.log(soLuong);
        for(let i=0;i<soLuong;i++){
            if(this.state.listHanhDong[i]=="Len"){
                console.log("len");
                await new Promise(r => setTimeout(r, 500));
                this.props.moveUp();
            }
            if(this.state.listHanhDong[i]=="Trai"){
                console.log("len");
                await new Promise(r => setTimeout(r, 500));
                this.props.moveLeft();
            }
            if(this.state.listHanhDong[i]=="Phai"){
                console.log("len");
                await new Promise(r => setTimeout(r, 500));
                this.props.moveRight();
            }
            if(this.state.listHanhDong[i]=="Xuong"){
                console.log("len");
                await new Promise(r => setTimeout(r, 500));
                this.props.moveDown();
            }
            
        }
    }

    render(){
        return (
        <div>
            <InputChoice handleThem={(e)=>this.handleThem(e)} handleChange={(e)=>this.handleChange(e)}/>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Danh sach hanh dong
                </Typography> 
            </Grid>
            {this.inra()}
            <p></p>
            <p></p>
            <Button variant="contained" onClick={(e)=>this.handleChay(e)}>Chay</Button>
        </div>
        )
    }
}
export default BangHanhDong;