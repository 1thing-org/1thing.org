import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

function Navigation({ title, links }: { title: string; links: string }) {
  return (
    <Link to={links} className="link">
      <div>{title}</div>
    </Link>
  )
}

export default function HeaderSection() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">1 Thing</span>
              <img className="h-20 w-auto sm:h-20" src={Logo} alt="1 Thing Org logo" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Navigation title={"Take Action"} links={"/take-actions"}></Navigation>
            <Navigation title={"Testimonials"} links={"/testimonials"}></Navigation>
            <Navigation title={"About Us"} links={"/about-us"}></Navigation>
            <Navigation title={"Contact Us"} links={"/contact-us"}></Navigation>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto sm:h-10" src={Logo} alt="1 Thing Org logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="text-lg">
                <Navigation title={"Take Action"} links={"/takeaction"}></Navigation>
                <Navigation title={"Testimonials"} links={"/testimonials"}></Navigation>
                <Navigation title={"About Us"} links={"/aboutus"}></Navigation>
                <Navigation title={"Contact"} links={"/contact"}></Navigation>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
