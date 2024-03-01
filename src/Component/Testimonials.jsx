import ReviewCard from "./ReviewCard"

function Testimonials() {
    return (
        <div className="lg:px-12 px-4 py-40" id='testimonials'>
            <div className=" text-headingcolor mb-20">
                <p className="text-xl font-semibold mb-5">Client feedback</p>
                <h2 className="md:text-5xl text-4xl font-bold">Testimonials</h2>
            </div>
            <div className="">
                <ReviewCard></ReviewCard>
            </div>
        </div>
    )
}

export default Testimonials