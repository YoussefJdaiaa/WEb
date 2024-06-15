import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"
type Props = {
    children: React.ReactNode;
    setSelectedPage:(value: SelectedPage)=> void;
}

const ActionButton = ({children , setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-full bg-primary-600 py-2 px-4  hover:bg-primary-500 hover:text-white black-text"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink> 
  )
}

export default ActionButton