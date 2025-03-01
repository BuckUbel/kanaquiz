import {useState} from "react";
import './navigation.scss'
import NavigationList from "./NavigationList.tsx";

interface NavigationProps {
  horizontal?: boolean;
}

function Navigation(props: NavigationProps) {

  const {horizontal} = props;
  const [openVertical, setOpenVertical] = useState(false);


  return (
    <nav>
      <div className={"navigation-container"}>
        <NavigationList/>
      </div>
    </nav>
  )
}

export default Navigation
