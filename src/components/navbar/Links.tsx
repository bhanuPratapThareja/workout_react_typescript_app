import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const links: string[] = ['Home', 'Benefits', 'Our Classes', 'Cantact Us']

type Props = {
    selectedPage: string,
    setSelectedPage: (value: string) => void,
}

const Links = (props: Props) => {

    const getLowerCasePage = (page: string) => {
        return page.toLowerCase().replace(/ /g, '')
    }

    const renderLinks = links.map(link => {
        console.log('link: ', getLowerCasePage(link))
        return (
            <AnchorLink
                key={link}
                href={`#${getLowerCasePage(link)}`}
                className={`${props.selectedPage === getLowerCasePage(link) ? "text-primary-500" : ''}
            transition duration-500 hover:text-primary-300 `}
                onClick={() => props.setSelectedPage(getLowerCasePage(link))}
            >
                {link}
            </AnchorLink>
        )
    })

    return (
        <>
            {renderLinks}
        </>
    )
}
export default Links