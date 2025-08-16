import {useLocation, useNavigate} from "react-router";
import Card from "@/elements/Card/Card.tsx";

interface BreadcrumbsProps {
  basePath: string;
}

function Breadcrumbs(props: BreadcrumbsProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== props.basePath && <Card buttonCard>
        {location.pathname.split("/").slice(1, -1).map((pathPart, i) => {
          return <button
            key={pathPart}
            onClick={() => navigate(location.pathname.split("/").slice(0, i + 2).join("/"))}>
            → {pathPart}
          </button>
        })}
      </Card>}
    </>
  )
}

export default Breadcrumbs
