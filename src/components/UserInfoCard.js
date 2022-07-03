import React, {Fragment} from "react"
import {
    Avatar,
    Badge,
    Card,
    CardContent,
    Chip,
    Divider,
    styled,
    Typography
} from "@mui/material";
import {faChrome, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    cardStyle,
    cardContentStyle,
    nameStyle,
    developerAtStyle,
    cardLinkStyle,
    avatarStyle,
    typographyContent,
    typographyHeader,
} from "../styling/myCustomStylingComponents"
import "./styles.css";
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons/faEarthEurope";
import user_img from "../img/user_image.webp"

const defaultUser = {
    name: "Ryan Llewellyn",
    company: "IQBlade Ltd",
    avatar_url: {user_img},
    location: "Liverpool, United Kingdom",
    bio: "Software Engineer based in Liverpool, UK. Specialising in Back-End development with Java and Spring, Front-End development with JavaScript, TypeScript and React, as well as Data Analytics with Python.",
    blog: "https://www.rllewellyn96.dev",
    login: "R-Llewellyn96",
    html_url: "https://github.com/R-Llewellyn96",
    followers: 1,
    following: 0,
    public_repos: 21,
    public_gists: 0,
    hireable: true,
    twitter_username: "RLlewellyn96",
    linkedin_username: "RLlewellyn96"
}

const centerCard = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}

const linkStyling = {
    marginRight: '0.5rem'
}

export default function UserInfoCard() {

    const {
        name,
        company,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        twitter_username,
        linkedin_username
    } = defaultUser;

    const personalSite = defaultUser.blog.replace('https://www.','');

    // Set badge styling dynamically
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            marginRight: '1rem',
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (
        <div style={{...centerCard}}>
            <Card variant="outlined" style={{...cardStyle}} >
                <CardContent style={{...cardContentStyle}}>

                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            alt={login + "'s avatar"}
                            src={user_img}
                            sx={{...avatarStyle}}
                        />
                    </StyledBadge>

                    {/*Name and Company section*/}
                    <Typography gutterBottom variant="h4" component="div" align="center" style={{...nameStyle}}>
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div" align="center" style={{...developerAtStyle}}>
                        Developer at {company}
                    </Typography>

                    <Divider >
                        <Chip label="For Hire" />
                    </Divider>

                    {/*Location section*/}
                    <Typography gutterBottom variant="subtitle1" sx={{...typographyHeader}} component="div" align="left">
                        LOCATION
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}} component="div" align="left">
                        <FontAwesomeIcon icon={faEarthEurope} size="lg" /> {location}
                    </Typography>


                    {/* Section Divider */}
                    <Divider />

                    {/*Bio section*/}
                    <Fragment>
                        <Typography gutterBottom variant="subtitle1" sx={{...typographyHeader}} component="div" align="left">
                            BIO
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}} component="div" align="left">
                            {bio}
                        </Typography>
                    </Fragment>


                    {/*Links section*/}
                    <Fragment>
                        <Divider />
                        <Typography gutterBottom variant="subtitle1" sx={{...typographyHeader}} component="div" align="left">
                            LINKS
                        </Typography>

                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}} component="div" align="left">
                            <a href={blog} style={{...cardLinkStyle}}>
                                <FontAwesomeIcon icon={faChrome} size="lg" style={{...linkStyling}}/>
                                {personalSite}</a>
                        </Typography>


                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}} component="div" align="left">
                            <a href={html_url} style={{...cardLinkStyle}}>
                                <FontAwesomeIcon icon={faGithub} size="lg" style={{...linkStyling}}/>
                                {login}</a>
                        </Typography>


                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}}  component="div" align="left">
                            <a href={'https://twitter.com/' + twitter_username} style={{...cardLinkStyle}}>
                                <FontAwesomeIcon icon={faTwitter} size="lg" style={{...linkStyling}}/>
                                @{twitter_username}</a>
                        </Typography>

                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}}  component="div" align="left">
                            <a href={'https://www.linkedin.com/in/' + linkedin_username} style={{...cardLinkStyle}}>
                                <FontAwesomeIcon icon={faLinkedin} size="lg" style={{...linkStyling}}/>
                                {linkedin_username}</a>
                        </Typography>
                    </Fragment>

                    {/*Stats section*/}
                    <Fragment>
                        <Divider />
                        <Typography gutterBottom variant="subtitle1" sx={{...typographyHeader}} component="div" align="left">
                            STATS
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" sx={{...typographyContent}} component="div" align="center">
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-light">Public Repos: {public_repos}</div>
                            <div className="badge badge-dark">Public Gists: {public_gists}</div>
                        </Typography>
                    </Fragment>

                </CardContent>
            </Card>
        </div>

    );
}