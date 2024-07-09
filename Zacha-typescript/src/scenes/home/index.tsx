import { useEffect, useRef } from 'react';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import ZackaText from "@/assets/ZackaText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import test from "@/assets/test.mp4";
import Instagrame from"@/assets/instagram-logo.png";
import Tiktok from"@/assets/téléchargement.png";
import RedBull from"@/assets/SponsorRedBull.png";
import { motion } from 'framer-motion';




type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:950px)");
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(error => {
                // Auto-play was prevented, possibly due to browser policies
                console.error('Auto-play prevented:', error);
            });
        }

        return () => {
            if (video) {
                video.pause();
            }
        };
    }, []);

    return (
        <section id="home" className="gap-16 bg-black py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="zacka-text-container before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={ZackaText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
            Experience the essence of elegance
             and style with our exquisite line of clothing.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              By Now
            </ActionButton>
            
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.About)}
              href={`#${SelectedPage.About}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10
                                md:ml-40 md:mt-20 md:justify-items-end    "
                                style={{  height: '85%' }}>

                    <video
                        ref={videoRef}
                        loop
                        autoPlay
                        controls
                        muted  
                        playsInline
                        
                    >
                        <source src={test} type="video/mp4" 
                       />
                        Your browser does not support the video tag.
                    </video>
                </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[80px] w-full bg-black py-1">
          <div className="mx-auto w-4/6">
            <div className="flex w-3/5 justify-items-center">
              
              <a href="https://www.instagram.com/zacha_7/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagrame} alt="Instagram" 
                                    style={{ maxWidth: '40%', height: '20%' }}/>
                                    

                            </a>
                            <a href="https://www.tiktok.com/@zacha_7?_t=8mJTZacVP65&_r=1" target="_blank" rel="noopener noreferrer">
                                <img src={Tiktok} alt="Tiktok" 
                                    style={{ maxWidth: '40%', height: '20%' }}/>
                                    

                            </a>
            </div>
          </div>
        </div>
      )}
        </section> 
    );
};

export default Home;
