import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'

import Links from "./Links"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {}

const Navbar = (props: Props) => {
    const [selectedPage, setSelectedPage] = useState<string>('home')
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    console.log('isAboveMediumScreens: ', isAboveMediumScreens)

    const flexBetween = 'flex justify-between items-center'

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-16`}>

                    <img alt="logo" src={Logo} />

                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Links selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>

                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <p>SignIn</p>
                                <button>Become a member</button>
                            </div>
                        </div>
                    ) : (
                        <button
                        className="rounded-full bg-slate-500 p-2">
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}

                </div>
            </div>
        </div>
    </nav>
}
export default Navbar