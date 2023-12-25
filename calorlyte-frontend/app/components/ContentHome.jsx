export default function ContentHome() {
    return (
        <section className="bg-grey-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">How it <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-cyan-500">works</span></h2>
            <p className="mb-4"> Our AI-powered app acts as your personal diet planner, calorie counter, and workout buddy &ndash; all rolled into one. Simply track your meals, and Calorlyte analyzes your calorie intake and suggests healthy and delicious options to fit your goals. Plus, our personalized workout plans keep you challenged and motivated, adapting to your progress and preferences. </p>
            <p>Calorlyte is your one-stop shop for a fitter, happier, and healthier life.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full md:scale-110 rounded-lg" src="/Content1.jpg" alt="office content 1" />
            <img className="mt-4 w-full md:ml-4 lg:mt-10 rounded-lg" src="/Content2.jpg" alt="office content 2" />
        </div>
    </div>
</section>
    )
}