import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

function TestimonalCard({ quote, image, name, title }: { quote: string; image: string; name: string; title: string }) {
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">{quote}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img className="w-6 h-6 rounded-full" src={image} alt="profile picture" />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">{name}</div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{title}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default function WhyWeDo() {
  return (
    <>
      <section className="container items-center px-4 pb-10 mx-auto mt-10  lg:flex md:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-center">
          <h1 className="text-4xl font-bold text-yellow-500">Our Story</h1>
          <p className="text-center sm:mx-auto lg:ml-0">
            1 Thing Against Racism began as a slide deck shared around the offices at Google. Today, it is a mission
            driven orgnization comprised of volunteers who have their own reasons for contributing their time to our
            mission.
          </p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-center">
            <Link to={"#"}>
              <button className="px-4 py-2 text-sm rounded">Read more</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-3 gap-4">
          <TestimonalCard
            quote="Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen
                to complex dashboard. Perfect choice for your next SaaS application."
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            name="Micheal Gough"
            title="Google"
          />
          <TestimonalCard
            quote="Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen
                to complex dashboard. Perfect choice for your next SaaS application."
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            name="Micheal Gough"
            title="Google"
          />
          <TestimonalCard
            quote="Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen
                to complex dashboard. Perfect choice for your next SaaS application."
            image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            name="Micheal Gough"
            title="Google"
          />
        </div>
      </section>
    </>
  )
}
