import { Menu } from "./ui/menu";
import { GoWorkflow } from "react-icons/go";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
const Navbar = () => {

    
    return (
        <Menu.Root open={true}>
            <Menu.Action icon={RiMenuUnfoldLine}/>
           <Menu.Item icon={ GoWorkflow} />
           <Menu.Item icon={ BiLogoTelegram} />
          
        </Menu.Root>
    );
}

export default Navbar;