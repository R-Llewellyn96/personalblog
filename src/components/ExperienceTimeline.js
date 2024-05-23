import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap";

export default function ExperienceTimeline() {
    return (
        <Timeline position="alternate">
            {/*item one*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    Future
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <FontAwesomeIcon icon={faCode} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Future?
                    </Typography>
                    <Typography>Yet to be written.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/*item two*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    2023 - present
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined">
                        {/*<LaptopMacIcon />*/}
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Full-Stack Developer
                    </Typography>
                    <Typography>Mixam Ltd</Typography>
                </TimelineContent>
            </TimelineItem>

            {/*item three*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    2022 - 2023
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        {/*<LaptopMacIcon />*/}
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Software Engineer
                    </Typography>
                    <Typography>IQBlade Ltd</Typography>
                </TimelineContent>
            </TimelineItem>

            {/*item four*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    2021 - 2022
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined">
                        {/*<LaptopMacIcon />*/}
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Data Analyst
                    </Typography>
                    <Typography>IQBlade Ltd</Typography>
                </TimelineContent>
            </TimelineItem>

            {/*item five*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    2019 - 2020
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Advanced Computer Science MSc
                    </Typography>
                    <Typography>University of Liverpool</Typography>
                </TimelineContent>
            </TimelineItem>

            {/*item six*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                >
                    2014 - 2019
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot  color="secondary" variant="outlined">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Computer Information Systems Bsc
                    </Typography>
                    <Typography>University of Liverpool</Typography>
                </TimelineContent>
            </TimelineItem>


        </Timeline>
    );
}