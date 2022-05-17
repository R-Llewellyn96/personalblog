import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import { SiApple } from "@react-icons/all-files/si/SiApple";

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const chipDataDefault = [
    {
        key: 0,
        label: 'Java',
        icon: <i className="fa-brands fa-java fa-lg" style={{fontSize: '150%', color: '#5382a1'}} />
    },
    {
        key: 1,
        label: 'Spring Boot',
        icon: <i className="fa-solid fa-leaf fa-lg"  style={{fontSize: '150%', color: '#6db33f'}} />
    },
    {
        key: 2,
        label: 'Python',
        icon: <i className="fa-brands fa-python fa-lg" style={{fontSize: '150%', color: '#ffe873'}} />
    },
    {
        key: 3,
        label: 'Pandas',
        icon: <SiApple style={{fontSize: '125%', color: '#130654'}} />
    },
    {
        key: 4,
        label: 'MySQL',
        icon: <i className="fa-solid fa-database fa-lg" style={{fontSize: '150%', color: '#00758f'}} />
    }
]


const ChipsArray = (props) => {

    const [chipData] = useState(props.chipdata);

    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
            component="ul"
        >
            {chipData.map((data) => {

                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={data.icon}
                            label={data.label}
                            sx={{backgroundColor: '#FAF9F6', fontSize: '80%'}}
                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}

// Set default props
ChipsArray.defaultProps = {
    chipData: chipDataDefault
};

export default ChipsArray;
