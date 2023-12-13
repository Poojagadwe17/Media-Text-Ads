import React, { useState } from 'react';
import { Button, TextField, Select, Card, CardContent, Grid, MenuItem, Slide } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, Typography, Box, Icon } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function TextAdForm() {

    const [selectedOption, setSelectedOption] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenDialog(true);
        setTimeout(() => {
            setOpenDialog(false);
            navigate('/create-ad');
        }, 600);
    };
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };




    return (
        <div style={{ marginTop: '100px', marginLeft: '20px', marginRight: '20px' }}>
            <Card style={{ height: '80vh' }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <h3>Create Text & Media</h3>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <label htmlFor="heading01" style={{ fontFamily: 'sans-serif' }}>Heading 01</label>
                                <TextField
                                    id="heading01"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    placeholder="Add a heading that would make users interested"
                                    sx={{ "& input": { padding: '8px' } }}
                                />
                                <label htmlFor="heading02" style={{ fontFamily: 'sans-serif' }}>Heading 02</label>
                                <TextField
                                    id="heading02"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    placeholder="Add a heading that would make users interested"
                                    sx={{ "& input": { padding: '8px' } }}
                                />
                                <label htmlFor="businessName" style={{ fontFamily: 'sans-serif' }}>Business Name</label>
                                <TextField
                                    id="businessName"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    placeholder="Add your business name"
                                    sx={{ "& input": { padding: '8px' } }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <label htmlFor="description01" style={{ fontFamily: 'sans-serif' }}>Description 01</label>
                                <TextField
                                    id="description01"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    placeholder="Add primary text to help users understands more about you products, serevices or offers"
                                    multiline
                                    rows={4}

                                />
                                <div>
                                    <label htmlFor="buttonLabel" style={{ fontFamily: 'sans-serif' }}>Button Label</label>
                                    <Select
                                        labelId="buttonLabel"
                                        id="buttonLabel"
                                        value=""
                                        onChange={handleDropdownChange}
                                        displayEmpty
                                        fullWidth
                                        style={{ marginTop: '12px', color: '#d3d3d3' }}
                                        sx={{ "& .MuiOutlinedInput-input": { padding: '8px' } }}
                                    >
                                        <MenuItem value="" disabled>
                                            Select a label that best suits your ad
                                        </MenuItem>
                                        <MenuItem value="Option 1">Option 1</MenuItem>
                                        <MenuItem value="Option 2">Option 2</MenuItem>
                                        <MenuItem value="Option 3">Option 3</MenuItem>
                                    </Select>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <label htmlFor="websiteURL" style={{ fontFamily: 'sans-serif' }}>Website URL</label>
                                <TextField
                                    id="websiteURL"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    placeholder="Add the URL of the landing page you want to redirect users to"
                                    sx={{ "& input": { padding: '8px' } }}
                                />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '60px' }}>
                            <Button variant="contained" color="primary" type="submit" style={{ float: 'right', marginTop: '20px', paddingLeft: '30px', paddingRight: '30px' }}>
                                Submit
                            </Button>
                            <Link to="/create-ad" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" style={{ float: 'right', marginTop: '20px', marginRight: '10px', color: 'black', borderColor: 'black', paddingLeft: '30px', paddingRight: '30px' }}>
                                    Back
                                </Button>
                            </Link>
                        </div>

                        <Dialog
                            open={openDialog}
                            TransitionComponent={Transition}
                            keepMounted
                            aria-labelledby="dialog-title"
                            aria-describedby="dialog-description"
                            sx={{

                                "& .MuiDialog-paper": {
                                    width: '40%',
                                    maxWidth: 'md',
                                },
                            }}
                        >
                            <DialogContent>
                                <Box display="flex" justifyContent="center">
                                    <Icon component={CheckCircle} sx={{ color: 'blue', fontSize: 30 }} />
                                </Box>
                                <Typography variant="h5" align="center" mt={2}>
                                    Submitted
                                </Typography>
                            </DialogContent>

                        </Dialog>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default TextAdForm;
