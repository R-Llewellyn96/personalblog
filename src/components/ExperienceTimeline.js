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
                    align="right"
                    variant="body1"
                    color="text.secondary"
                >
                    Future
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <FontAwesomeIcon icon={faCode} size="md"/>
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
                    color="text.secondary"
                >
                    2021 - present
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined">
                        {/*<LaptopMacIcon />*/}
                        <FontAwesomeIcon icon={faLaptopCode} size="md"/>
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

            {/*item three*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                    color="text.secondary"
                >
                    2019 - 2020
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <FontAwesomeIcon icon={faGraduationCap} size="md"/>
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

            {/*item four*/}
            <TimelineItem>
                {/*opposite side content*/}
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body1"
                    color="text.secondary"
                >
                    2014 - 2019
                </TimelineOppositeContent>
                {/*main content*/}
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot  color="secondary" variant="outlined">
                        <FontAwesomeIcon icon={faGraduationCap} size="md"/>
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