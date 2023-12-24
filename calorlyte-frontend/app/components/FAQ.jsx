import CardFAQ from "./CardFAQ"
export default function FAQ() {
    return (
        <div className="flex justify-center items-start my-2">
        <div className="w-full flex flex-col justify-center sm:w-10/12 md:w-1/2 my-1">
        <h2 className="text-xl font-semibold text-mod-teal mb-2">Frequently Asked Questions</h2>
        <ul className="flex flex-col">
         <CardFAQ />
          </ul>
          </div>
          </div>
    )
}