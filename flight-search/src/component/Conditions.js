import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/core/styles";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
            marginBottom: "2em"

        },
    },
    search: {
        textAlign: "center",
        background: "yellow"
    }
});

export default withTheme(
    withStyles(useStyles)(
        class Conditions extends Component {
            state = {
                selectedDate: "2019-08-18T21:11:54",

            }
            handleDateChange = (evt, date) => {
                this.setState({ selectedDate: date })

            }
            render() {
                const { classes } = this.props
                return (
                    <div className={classes.search}>
                        <h1 style={{ padding: "1em 0" }}>Flight Search</h1>
                        <form className={classes.root} noValidate autoComplete="off" >
                            <TextField id="outlined-basic" label="From" variant="outlined" />
                            <TextField id="filled-basic" label="To" variant="outlined" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date"
                                    format="MM/dd/yyyy"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </form>
                        <Button variant="contained" color="primary" >
                            Search
                        </Button>
                    </div>
                )
            }
        }
    ))