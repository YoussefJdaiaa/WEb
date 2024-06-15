import { useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.jpg";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage : SelectedPage;
    setSelectedPage : (value : SelectedPage) => void;
};
const Navbar = ({
isTopOfPage,   
selectedPage,
setSelectedPage
}: Props) => {
    const flexbetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") ;
    const [isMenuToggled,setIsMennuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "": "bg-black drop-shadow";
  return (<nav> 
    <div className={`${navbarBackground}${flexbetween} fixed top-0 z-30 w-full py-1 `} >
        <div className={`${flexbetween}  mx-auto w-5/6 `}>
            <div className={`${flexbetween}  w-full gap-16 `}>
            <img alt="logo" src={Logo} className="h-20" />
                {isAboveMediumScreens ? (
                <div className={`${flexbetween} w-full  ` }>
                    <div  className={`${flexbetween} gap-8 text-sm ` }>
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="About"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Shop Online"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact US"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    </div>
                    <div className={`${flexbetween} gap-8 ` }>
                    <p>Sign In </p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                    </div> 
                   
                </div>
                ):(
                    <button className="rounded-full bg-black p-2"
                    onClick={()=>setIsMennuToggled(!isMenuToggled)}
                    >
                    <Bars3Icon className="h-5 w-5 text-white" />
                    </button>
                )}
            </div>

        </div>
    </div>
    {!isAboveMediumScreens && isMenuToggled && (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-600 drop-shadow-xl">
        
        <div className="flex justify-end p-12">
            <button onClick={()=>setIsMennuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-5 w-5 text-gray-400" />
            </button> 
        </div>
        
                <div  className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="About"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Shop Online"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link page="Contact US"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
    </div>
  )}
  </nav>

       
 
);
};
export default Navbar;