/*
 * to use dynamic component content with mdx or yaml.
 * search for yaml or mdx. uncomment to use mdx and vice versa
 */

import * as React from 'react'

//yaml
import YAMLData from '../../yaml-content/header.yaml'

import LogoSVG from '../svg/logo.svg'
import Telegram from '../svg/telegram.svg'
import Twitter from '../svg/twitter.svg'
import Discord from '../svg/discord.svg'
import Reddit from '../svg/reddit.svg'

import security from '../images/Security.png'
import privacy from '../images/Privacy.png'
import integrity from '../images/Integrity.png'

// LP game
// import LiquidityDashboard from "../containers/LiquidityDashboard";

// Icons
import { BiStoreAlt, BiWallet, BiListCheck } from 'react-icons/bi'
import { CgGames } from 'react-icons/cg'
import { FaVoteYea } from 'react-icons/fa'
import { RiExchangeFundsFill } from 'react-icons/ri'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Header } from './header'
import {
    AbsoluteContainer,
    BackgroundCrown,
    BodyCopy,
    Center,
    Container,
} from './shared'

const HomePage = () => {
    // grabing dynamic data from dynamicContent/coming-soon/coming-soon

  return (
    <Container>
      <BackgroundCrown />
      <AbsoluteContainer>
        <Header />
        <Center>
          <Logo />
          <BuyNow YAMLData={YAMLData} />
          <BodyCopy YAMLData={YAMLData} />
        </Center>
        <div className="bg-white w-full p-4 mt-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-5xl text-royalBlue-500 mt-8 mb-4 ProximaNovaBlack">
              Gaming Evolved
            </h2>
            <p className="max-w-xl mx-auto text-center">
              Technology in the 21st century is advancing more rapidly than ever
              before. With groundbreaking innovations making products smaller,
              smarter, and more efficient, many of them are progressing faster
              than consumers can keep up. So why has digital gaming remained
              largely unchanged?
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              <p className="my-8">
                <h2 className="ProximaNovaBlack text-center lg:text-left text-5xl text-royalBlue-500 mb-4">
                  Changing the <br /> Game for Gamers
                </h2>
                <p className="max-w-xl mx-auto text-center lg:text-left">
                  The future of gaming technology needs to be more than just a
                  graphics upgrade. While the importance of effortless user
                  interface and flawless visuals can’t be overstated, Royal
                  Protocol takes development in a new direction. By looking
                  below the surface and overhauling the outdated fundamental
                  systems which allow games to run in the first place.
                </p>
              </p>
              <div>
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 max-w-xl mx-auto mb-16">
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <CgGames size="64px" className="mx-auto mb-2" />
                    Royal Arcade Studio
                  </div>
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <BiStoreAlt size="64px" className="mx-auto mb-2" />
                    NFT Marketplace
                  </div>
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <RiExchangeFundsFill size="64px" className="mx-auto mb-2" />
                    Decentralized Exchange
                  </div>
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <FaVoteYea size="64px" className="mx-auto mb-2" />
                    Governance Token
                  </div>
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <BiWallet size="64px" className="mx-auto mb-2" />
                    Integrated Wallet App
                  </div>
                  <div className="shadow-lg p-5 text-center text-royalBlue-500">
                    <BiListCheck size="64px" className="mx-auto mb-2" />
                    Royal Arcade Standard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white w-full ">
          <LiquidityDashboard />
        </div> */}
        <div className="text-white bg-blue-gradient w-full p-4 ">
          <div className="mx-auto max-w-5xl">
            <h2 className="ProximaNovaBlack text-5xl mb-8 mt-16 text-center">
              Founding Principles
            </h2>
            <p className="my-8 mb-16 max-w-3xl mx-auto text-center">
              The world of game development as we know it is deeply complex.
              Further incorporating cryptocurrency or viewing projects through
              the intricate lens of blockchain technology compounds that level
              of detail considerably. When creating something new in such a
              nuanced environment, it’s imperative to maintain a clear vision
              for who we are as a company and how our work can align with our
              values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16">
              <div>
                <div className="flex flex-col">
                  <img
                    src={integrity}
                    alt=""
                    className="block w-32 mb-3 mx-auto"
                  />
                  <h2 className="ProximaNovaBlack text-5xl mb-8 text-center">
                    Integrity
                  </h2>
                </div>
                <p className="text-center">
                  Royal Protocol was born from the realization that much of the
                  mainstream gaming industry has prioritized monetary success
                  over the wellbeing of their players by relying on predatory
                  game mechanics. However, it is our goal to offer solutions for
                  users and creators to move away from practices which
                  capitalize on risk and loss. We believe that the future of
                  gaming will instead be one of transparency, empathy, and a
                  mutually beneficial economy.
                </p>
              </div>
              <div>
                <div className="flex flex-col">
                  <img
                    src={security}
                    alt=""
                    className="block w-32 mb-3 mx-auto"
                  />
                  <h2 className="ProximaNovaBlack text-5xl mb-8 text-center">
                    Security
                  </h2>
                </div>
                <p className="text-center">
                  Gaming evolution could not be complete without redefining what
                  makes it safe and reliable. Even companies which follow
                  current best practices do not allow outsiders to objectively
                  verify if stated safeguards or precautions are in place. This
                  removes agency from the individual and forces them to put
                  their trust in a corporate entity without access to objective
                  truth. It’s only through a reconceptualization of how games
                  can exist and interact through blockchain technology that
                  Royal Protocol can set a standard of accountability and
                  transparency which will protect and empower users.
                </p>
              </div>
              <div>
                <div className="flex flex-col">
                  <img
                    src={privacy}
                    alt=""
                    className="block w-32 mb-3 mx-auto"
                  />
                  <h2 className="ProximaNovaBlack text-5xl mb-8 text-center">
                    Privacy
                  </h2>
                </div>
                <p className="text-center">
                  It is impossible to interact with online digital content
                  without some level of information exchange. Name, location, IP
                  address, bank account number, and more, can be accessed easily
                  by the right individual, company, or government. Mainstream
                  gaming lives within a system where even the best kept secret
                  is inherently vulnerable to exposure. Our eventual goal with
                  the Royal Protocol Ecosystem will is to allow users to retain
                  their anonymity, ensuring their sensitive data remains where
                  it belongs – with them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 w-full bg-royalBlue-500">
          <SocialLinks
            Telegram={Telegram}
            Twitter={Twitter}
            Discord={Discord}
            Reddit={Reddit}
          />
        </div>
        {/* <DynamicMDXLinks /> */}
        {/* <DynamicYAMLLinks /> */}
      </AbsoluteContainer>
    </Container>
  );
};

const Logo = () => {
  return (
    <div
      className={
        "logo items-center align-middle md:flex-shrink-0 px-8 my-16 mt-32"
      }
    >
      <LogoSVG className={"h-48 w-full object-cover md:h-full "} />
    </div>
  );
};

const BuyNow = ({ YAMLData }) => {
    return (
        <div className="max-w-600 flex items-center align-middle justify-center my-16">
            <a
                className="btn bg-blue-gradient"
                href={YAMLData.buyLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy&nbsp;<strong className="font-bold">Now</strong>
                <HiOutlineArrowNarrowRight className="ml-3" />
            </a>
        </div>
    )
}

const SocialLinks = ({ Telegram, Twitter, Discord, Reddit }) => {
    return (
        <div className={'grid gap-2 grid-cols-4 max-w-lg mx-auto'}>
            <a
                className="mx-auto"
                href="https://t.me/ROYprotocol"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Telegram className={'filter hover:drop-shadow-g1'} />
            </a>
            <a
                className="mx-auto"
                href="https://twitter.com/ProtocolRoyal"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Twitter className={'filter hover:drop-shadow-g1'} />
            </a>
            <a
                className="mx-auto"
                href="https://discord.gg/CtmEYr52Yb"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Discord className={'filter hover:drop-shadow-g1'} />
            </a>
            <a
                className="mx-auto"
                href="https://www.reddit.com/r/RoyalProtocol/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Reddit className={'filter hover:drop-shadow-g1'} />
            </a>
        </div>
    )
}

export default HomePage
