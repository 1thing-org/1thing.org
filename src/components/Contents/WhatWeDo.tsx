import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

type CardDataType = {
  title: string
  content: string
  link: string
  image: string
}

function FCard({ title, content, link, image }: CardDataType) {
  return (
    <>
      <section className="container items-center px-4 pb-10 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold text-yellow-500">{title}</h1>
          <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">{content}</p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link to={link}>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">Read more</button>
            </Link>
          </div>
        </div>
        <div className="max-w-xs">
          <img src={image} alt="image" className="w-full mx-auto mt-6 sm:w-10/12 lg:w-full" />
        </div>
      </section>
    </>
  )
}

function HCard({ title, content, link, image }: CardDataType) {
  return (
    <>
      <div className="flex flex-col sm:w-96">
        <h5 className="text-gray-900 text-xl font-medium mb-4">{title}</h5>
        <p className="text-gray-700 text-base mb-4 ">{content}</p>
        <p className="text-gray-600 text-xs">
          <Link to={link}>Read more</Link>
        </p>
      </div>

      <img
        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
    </>
  )
}

export default function WhatWeDoSection() {
  return (
    <>
      <div className="flex justify-center">
        <FCard
          title="1thing title"
          content="Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod convallis ultricies mauris sollicitudin nisl."
          link="http://www.test.com"
          image={Logo}
        />
      </div>
      <div className="flex justify-center space-x-20">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <HCard
            title="test"
            content="Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod convallis ultricies mauris sollicitudin nisl."
            link="http://www.test.com"
            image="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          />
        </div>
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <HCard
            title="test"
            content="Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod convallis ultricies mauris sollicitudin nisl."
            link="http://www.test.com"
            image="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          />
        </div>
      </div>
    </>
  )
}
