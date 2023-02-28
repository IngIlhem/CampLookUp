import React from "react";
import SiteDetails from "./SiteList";
import SiteList from "./SiteList";

const SitesList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.sites.map(site => (
            <li key={site.id}><SiteList  site={site} /></li>))
            }
        </ul>
    )
}

export default SitesList;
