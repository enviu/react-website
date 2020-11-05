import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    //lul
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='videos/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign Up for a new account today and receive $250 in credit towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button primary='true' dark='true' to='signup' onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
